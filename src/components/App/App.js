import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import Profile from '../Auth/Profile/Profile';
import HeaderNavPopup from '../Header/HeaderNav/HeaderNavPopup/HeaderNavPopup';
import Error404 from "../Error404/Error404";
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([])

  const navigate = useNavigate();
  
  function handleSaveMovies(movie) {
    mainApi.saveMovie(movie)
      .then((res) => { 
          setSavedMovies((movies) => [...movies, res.data])
      })
      .catch ((err) => console.log(err))   
  }

  function handleDeleteMovies(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
          setSavedMovies((movies) =>
            movies.filter((savedMovie) => savedMovie._id !== movie._id),
       )
         } )
      .catch ((err) => console.log(err))   
  }

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
  
  function handleHeaderNavClick() {
    setIsHeaderPopupOpen(true);
  }

  function closePopup() {
    setIsHeaderPopupOpen(false)
  }

   function handleLogin() {
    tokenCheck()
  }

 React.useEffect(() => {
    tokenCheck();
  }, [])

  function tokenCheck () {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      mainApi.getContent(jwt)
      .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate('/movies')
            setCurrentUser(res.data);
            mainApi.getSaveMovies()
            .then((res) => {
              setSavedMovies(res.data);
            })
            .catch((err) => console.log(err))
          }
        })
      .catch ((err) => {
      localStorage.removeItem('token');
      localStorage.removeItem('foundMovies');
      localStorage.removeItem('searchText');
      localStorage.removeItem('checkboxValue');
      setCurrentUser(null);
      console.error(err);    
    })
  }
}

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('searchText');
    localStorage.removeItem('checkboxValue');
    setCurrentUser(null)
    setLoggedIn(false);
  }

    function handleUpdateUserInfo(res) {
      setCurrentUser(res);
    }

  return (
    <div className="content">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<ProtectedRouteElement loggedIn={loggedIn}>
            <Movies onOpenHeaderNav={handleHeaderNavClick} 
                    savedMovies={savedMovies} 
                    onSaveMovies={handleSaveMovies}
                    onDeleteMovies={handleDeleteMovies}
                    loggedIn={loggedIn} />
          </ProtectedRouteElement>} />
          <Route path="/saved-movies" element={<ProtectedRouteElement loggedIn={loggedIn}>
            <SavedMovies onOpenHeaderNav={handleHeaderNavClick}
                          savedMovies={savedMovies} 
                          onDeleteMovies={handleDeleteMovies}
                          loggedIn={loggedIn}  />
          </ProtectedRouteElement>} />
          <Route path="/signup" element={<Register handleLogin={handleLogin} />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/profile" element={<ProtectedRouteElement loggedIn={loggedIn}>
            <Profile onOpenHeaderNav={handleHeaderNavClick}
                     signOut={signOut}
                     onUpdateUser={handleUpdateUserInfo}
                     loggedIn={loggedIn} />
          </ProtectedRouteElement>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        {width < 769 && <HeaderNavPopup isOpen={isHeaderPopupOpen} onClose={closePopup} />}
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
