import { Link, NavLink } from "react-router-dom";
import "../HeaderNav.css";
import "../HeaderDesktop/HeaderDesktop.css"
import "../HeaderMobile/HeaderMobile.css"
import "../../Header.css"
import accountLogo from "../../../../images/account.svg"

export default function HeaderNavPopup(props) {

   return (
    <div className={`header-nav header-${props.name} ${props.isOpen && 'header-nav-mobile header-nav-mobile_active' }`}>
      <nav className="header-nav__container">
        <ul className="header-nav__links">
        {props.isOpen && <button className="header-nav__close" type="button" onClick={props.onClose}></button>}
          {props.isOpen && <NavLink to='/'  className={({ isActive }) => `header-nav__link
            ${isActive && "header-nav__link_active"}`} >Главная</NavLink>}
          <li><NavLink to='/movies' className={({ isActive }) => `header-nav__link
            ${isActive && "header-nav__link_active"}`}>Фильмы</NavLink></li>
          <li><NavLink to="/saved-movies" className={({ isActive }) => `header-nav__link
            ${isActive && "header-nav__link_active"}`}>Сохранённые фильмы</NavLink></li>
        </ul>
        <div className="header-nav__auth">
          <Link to='/profile' className="header-nav__account">Аккаунт
            <img className="header-nav__link-logo" src={accountLogo} alt="Иконка с изображением пользователя для возвращения в профиль" />
          </Link>
        </div>
      </nav>
    </div>
    )
  }