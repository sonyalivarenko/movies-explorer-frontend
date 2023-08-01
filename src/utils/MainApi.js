import {apiMainData} from "./utils";

class MainApi {
  constructor({ baseUrl }) {
  this._baseUrl = baseUrl;
}

 _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  }

  _getToken() {
    return `Bearer ${localStorage.getItem("token")}`;
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
    .then(res => {
      return this._getResponseData(res);
    });
  };

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then((response => response.json()))
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
  };

    // загрузка информации о пользователе с сервера
  getProfileInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `${this._getToken()}`,
        'Content-Type': 'application/json',
      }})
        .then(res => {
          return this._getResponseData(res);
        });
    }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      return this._getResponseData(res);
    });
  }

  //загрузка информации о пользователе на сервер
  setProfileInfo({name, email}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

    // загрузка новых данных пользователя на сервер
  editProfile(profileInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: profileInfo.name,
        email: profileInfo.email
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  getSaveMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `${this._getToken()}`,
        'Content-Type': 'application/json',
      }})
      .then(res => {
        return this._getResponseData(res);
      });
}

    // сохранение фильма на сервере
    saveMovie(movieData) {
      return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          authorization: `${this._getToken()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: movieData.country,
          director: movieData.director,
          duration: movieData.duration,
          year: movieData.year,
          description: movieData.description,
          image: `https://api.nomoreparties.co/${movieData.image.url}`,
          trailerLink: movieData.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${movieData.image.url}`,
          movieId: movieData.id,
          nameRU: movieData.nameRU,
          nameEN: movieData.nameEN })
      })
        .then(res => {
          return this._getResponseData(res);
        });
    }
   
    // удаление сохраненного фильма с сервера
    deleteMovie(movieId) {
      return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
          authorization: `${this._getToken()}`,
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          return this._getResponseData(res);
        });
    }
}

const mainApi = new MainApi(apiMainData);

export default mainApi;