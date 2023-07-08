import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useRef, useState } from "react";
import { MOVIES_CARD_LIST } from "../../../utils/utils";

export default function MoviesCardList(props) {
  
  const isSaved = props.isSaved;
  const filmSaveClassName = (
    `movie ${isSaved && 'movie_saved'}`
  );
  const movies = (isSaved ? props.savedMovies : props.movies)

  const grid = useRef();
  const [renderedMovies, setRenderedMovies] = useState([]);

  function gridColumns(gridElement) {
    const gridComputedStyle = window.getComputedStyle(gridElement);
    return gridComputedStyle.getPropertyValue('grid-template-columns').split(' ')
      .length;
  }

  useEffect(() => {
    if (movies.length) {
      const columnsCount = gridColumns(grid.current);
      const initialCardsCount = MOVIES_CARD_LIST[columnsCount]?.row;
      const array = movies.slice(0, initialCardsCount);
      setRenderedMovies(array);
    }
  }, [movies])

  function handleMoreButtonClick() {
    const columnsCount = gridColumns(grid.current);
    const moreCardsCount = MOVIES_CARD_LIST[columnsCount]?.add;
    const array = movies.slice(0, renderedMovies.length + moreCardsCount);
    setRenderedMovies(array);
  }

  return (
    <section className={filmSaveClassName}>
      <ul className="movie__list" ref={grid}>
        {renderedMovies.map((film)=> <MoviesCard key={film.movieId ? film.movieId : film.id}
                                              film={film} 
                                              isDelete={props.isDelete}
                                              onMovieClick={props.onMovieClick}
                                              savedMovies={props.savedMovies}
                                              checkboxValue={props.checkboxValue} />)}
      </ul>
      {!isSaved && renderedMovies.length < movies.length && <button className="movie__button" type="button" onClick={handleMoreButtonClick}>Ещё</button>}
    </section>
  )
}