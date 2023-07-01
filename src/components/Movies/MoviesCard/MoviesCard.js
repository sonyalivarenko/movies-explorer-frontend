import "./MoviesCard.css";
import { apiMoviesData } from "../../../utils/utils";

export default function MoviesCard(props) {

  const BASE_URL = apiMoviesData.baseUrl;

  const isSaved = props.savedMovies.some(
    (savedMovie) => savedMovie.nameRU === props.film.nameRU
  )

  const isDelete = props.isDelete;
  const filmSaveButtonClassName = (
    `movies-card__button ${isDelete ? 'movies-card__button_delete' : isSaved && 'movies-card__button_active'}`
  );

 function handleSaveClick() {
    props.onMovieClick(props.film, isSaved);
}

function calculateDuration() {
  const hours = Math.floor(props.film.duration/60);
  const minutes = props.film.duration % 60;
  if (hours === 0) {
    return (minutes+'м');
  } else {
    return (hours+"ч"+minutes+"м")
  }
}

  let src = `${BASE_URL}/${props.film.image.url}`;

   return(
    <li className="movies-card">
      <a className="movie__link" href={props.film.trailerLink} target="_blank">
        <img className="movies-card__img" alt={`Кадр из фильма ${props.film.nameRU}`} src={props.film.movieId ? props.film.image : src} />
      </a>
      <div className="movies-card__description">
        <div className="movies-card__text">
          <h2 className="movies-card__name">{props.film.nameRU}</h2>
          <p className="movies-card__time">{calculateDuration(props.film.duration)}</p>
        </div>
        <button className={filmSaveButtonClassName} type="button" onClick={handleSaveClick}></button>
      </div>
    </li>
  )
}