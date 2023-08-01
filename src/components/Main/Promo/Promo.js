import promoImage from '../../../images/promo.svg';
import "./Promo.css";

export default function Promo() {

  function scrollTo() {
    window.location.href = "#about-project";
}

  return (
    <section className="promo">
      <div className="promo__flex">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button" type="button" onClick={scrollTo}>Узнать больше</button>
      </div>
      <img className="promo__img" src={promoImage} alt="Изображение земли" />
    </section>
  )
}