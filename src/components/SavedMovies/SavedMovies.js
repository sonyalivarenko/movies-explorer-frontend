import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList"
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Preloader from "../Movies/Preloader/Preloader";
import MessageError from "../Movies/MessageError/MessageError";

export default function SavedMovies(props) {

  const [foundMovies, setFoundMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteSavedMovie(movie) {
     props.onDeleteMovies(movie);
    }

    function handleCheckboxChange(value) {
      setCheckboxValue(value);
    }

    useEffect(() => {
      setFoundMovies(props.savedMovies);
    }, [props.savedMovies])

    function handleSearchFormSubmit(searchText, checkboxValue) {
      setIsLoading(true);
      setSearchText(searchText);
      setCheckboxValue(checkboxValue);
      if (checkboxValue && searchText) {
        setFoundMovies(props.savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) && movie.duration <= 40))
      }
      if (searchText && !checkboxValue) {
        setFoundMovies(props.savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchText.toLowerCase())
      ));
      }
      setIsLoading(false)
    }

  return (
    <>
      <Header isMain={false} loggedIn={props.loggedIn} onOpenHeaderNav={props.onOpenHeaderNav} />
      <main>
        <SearchForm isSaved={true}
                    onSubmit={handleSearchFormSubmit}
                    onCheckboxChange={handleCheckboxChange}
                    defaultCheckboxValue={checkboxValue}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    setCheckboxValue={setCheckboxValue} />
                    {isLoading ? (
                        <Preloader />
                      ) : foundMovies.length === 0 ? (
                        <MessageError text="Ничего не найдено" />
                      ) : (
                      <MoviesCardList isDelete={true} isSaved={true} savedMovies={foundMovies} onMovieClick={handleDeleteSavedMovie} />)}
        </main>
      <Footer />
    </>
  )
}