import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

export default function Main(props) {

  const navigate = useNavigate();

  const navigateSignUp = (evt) => {
      navigate("/signup");
  };

  const navigateSignIn = (evt) => {
    navigate("/signin");
};

  return (
    <>
      <Header isMain={true} loggedIn={props.loggedIn}>
        <div className="header__auth">
          <button className="header__signup" type="button" onClick={navigateSignUp}>Регистрация</button>  
          <button className="header__button" type="button" onClick={navigateSignIn}>Войти</button> 
        </div>
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}