import "./Auth.css";
import Logo from "../Logo/Logo";

export default function Auth(props) {

  const isLogin = props.isLogin;
  const isActive = props.isActive;
  const buttonAuthFormClassName = (
    `auth__button ${!isLogin && 'auth__button-register'}`
  );

  return(
    <main>
      <section className="auth">
        <Logo />
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form" name={props.name} noValidate onSubmit={props.onSubmit}>
          <fieldset className="auth__data">
            {!isLogin && <><label className="auth__label">Имя
              <input className="auth__item"
                type="text"
                id="auth__item-name"
                name="name"
                required
                minLength="2"
                maxLength="30"
                placeholder="Введите имя"
                onChange={props.onChange}
                value={props.values.name || ""} />
            </label>
            <span className={`auth__item-error ${(props.error.name !== "") && "auth__item-error_active"}`}>{props.error.name}</span></>}
            <label className="auth__label">E-mail
              <input className="auth__item" 
                      type="email"
                      id="auth__item-email"
                      name="email"
                      required
                      placeholder="Введите email"
                      onChange={props.onChange}
                      value={props.values.email || ""} />
            </label>
            <span className={`auth__item-error ${(props.error.email !== "") && "auth__item-error_active"}`}>{props.error.email}</span>
            <label className="auth__label">Пароль
              <input className="auth__item" 
                      type="password"
                      id="auth__item-password"
                      name="password"
                      required
                      minLength="5"
                      maxLength="30"
                      placeholder="Введите пароль"
                      onChange={props.onChange}
                      value={props.values.password || ""} />
            </label>
            <span className={`auth__item-error ${(props.error.password !== "") && "auth__item-error_active"}`}>{props.error.password}</span>
            <button className={buttonAuthFormClassName} type="submit" disabled={isActive ? false : true}>{props.buttonText}</button>
          </fieldset>
        </form>
        <div className="auth__signup">
          <p className="auth__text">{props.linkText}</p>
          {props.children}
        </div>
      </section>
    </main>
  )
}