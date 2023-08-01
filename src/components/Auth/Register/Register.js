import Auth from "../Auth"
import { Link } from "react-router-dom";
import mainApi from "../../../utils/MainApi";
import { useState } from "react";

export default function Register(props) {

  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [isActive, setIsActive] = useState(false);

  function handleChangeUser(e) {
    const {name, value} = e.target
    const error = e.target.validationMessage;
    setValues((values) => ({...values, [name]: value}));
    setError((errors) => ({...errors, [name]: error}))
    if (!e.target.validity.valid || values.name===undefined || values.email===undefined || values.password===undefined) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    mainApi.register(name, email, password)
      .then(() => {
        return mainApi.authorize(email, password)
          .then((res) => {
            if (res.token) {
              props.handleLogin();
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return(
    <>
      <Auth title="Добро пожаловать!"
            isLogin={false}
            buttonText="Зарегистрироваться"
            linkText="Уже зарегистрированы?"
            name="register"
            onSubmit={handleSubmit}
            onChange={handleChangeUser}
            values={values}
            error={error}
            isActive={isActive}>
              <Link to="/signin" className="auth__link">Войти</Link>
      </Auth>
    </>
  )
}