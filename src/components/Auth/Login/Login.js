import Auth from "../Auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import mainApi from "../../../utils/MainApi";

export default function Login(props) {

  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [isActive, setIsActive] = useState(false);
  
  const navigate = useNavigate();

  function handleChangeUser(e) {
    const {name, value} = e.target
    const error = e.target.validationMessage;
    setValues((values) => ({...values, [name]: value}));
    setError((errors) => ({...errors, [name]: error}))
    if (!e.target.validity.valid || values.email===undefined || values.password===undefined) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    mainApi.authorize(email, password)
      .then((data) => {
        console.log(data)
        if (data.token) {
          props.handleLogin();
          navigate("/movies")
        }
        })
      .catch(err => {
        console.log(err);
        });
  }

  return(
    <>
      <Auth title="Рады видеть!"
            isLogin={true}
            buttonText="Войти"
            linkText="Ещё не зарегистрированы?"
            name="login"
            onSubmit={handleSubmit}
            onChange={handleChangeUser}
            values={values}
            error={error}
            isActive={isActive}>
              <Link to="/signup" className="auth__link">Регистрация</Link>
      </Auth>
    </>
  )
}