import {apiMoviesData} from "./utils";

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`)
      .then (res => {
        return this._getResponseData(res);
      });
  }
}

const moviesApi = new MoviesApi(apiMoviesData);

export default moviesApi;