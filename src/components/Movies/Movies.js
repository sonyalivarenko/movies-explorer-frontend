import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "./Preloader/Preloader"
import MessageError from "./MessageError/MessageError";

export default function Movies(props) {

  const [movies, setMovies] = useState([]);

  const defaultSearchText = localStorage.getItem('searchText') ?? '';
  const defaultFoundMovies =
    JSON.parse(localStorage.getItem('foundMovies')) ?? [];
  const defaultCheckboxValue = localStorage.getItem('checkboxValue') === 'true'

  const [foundMovies, setFoundMovies] = useState(defaultFoundMovies);
  const [searchText, setSearchText] = useState(defaultSearchText);
  const [checkboxValue, setCheckboxValue] = useState(defaultCheckboxValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  //запрос к moviesApi
  async function getMovies() {
    setIsErrorLoading(false);
    setIsLoading(true);
    try {
      let movies = await moviesApi.getMovies()
       setMovies(movies)
    } catch  {
      setIsErrorLoading(true);
      }
    setIsLoading(false)
  }

 useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('checkboxValue', checkboxValue);
  }, [foundMovies, searchText, checkboxValue]);

  function handleCheckboxChange(value) {
    setCheckboxValue(value);
  }


  
  function handleSearchFormSubmit(searchText, checkboxValue) {
    setSearchText(searchText);
    setCheckboxValue(checkboxValue)
    getMovies();
    if (checkboxValue && searchText) {
      setFoundMovies(movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) && movie.duration <= 40))
    } 
    if (searchText && !checkboxValue) {
      setFoundMovies(movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchText.toLowerCase())
    ));}
  }

  function handleMovieClick(movie, isSaved) {
    if (isSaved) {
      const savedMovie = props.savedMovies.find(
        (savedMovie) => savedMovie.nameRU === movie.nameRU,
      );
     props.onDeleteMovies(savedMovie);
  } else {
     props.onSaveMovies(movie);
  }
}

  return (
    <>
      <Header isMain={false} loggedIn={props.loggedIn} onOpenHeaderNav={props.onOpenHeaderNav} />
      <main>
        <SearchForm isSaved={false} 
                    onSubmit={handleSearchFormSubmit}
                    onCheckboxChange={handleCheckboxChange}
                    checkboxValue={checkboxValue}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    setCheckboxValue={setCheckboxValue} />
                    {isErrorLoading ? (
                        <MessageError text="Во время запроса произошла ошибка. 
                                            Возможно, проблема с соединением или сервер недоступен. 
                                            Подождите немного и попробуйте ещё раз" />
                      ) : isLoading ? (
                        <Preloader />
                      )  : ((foundMovies.length === 0) && (movies.length === 0))  ? (
                        <MessageError text="Ничего не найдено" />
                      ) : (
                          <MoviesCardList movies={foundMovies} 
                                          onMovieClick={handleMovieClick}
                                          savedMovies={props.savedMovies}
                                          checkboxValue={checkboxValue} />)}
      </main>
      <Footer />
    </>
  )
}