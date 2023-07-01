import myPhoto from "../../../images/me.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-project__title">Студент</h2>
      <div className="about-me__text">
        <div>
          <h3 className="about-me__title">Софья</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 21 год</p>
          <p className="about-me__description">
              Влюблена в веб-разработку еще со школы. В последний год 
              параллельно с универом изучаю веб-разработку. Она вмещает в себя то, что мне
              нравится: программирование и создание чего-то
              красивого. Я упорно занялась курсом фронтенд-разработчик от Я.Практикум, 
              заняла первое место на конкурсе по верстке (проект «hotel-booking»).
              Очень ответственно и старательно отношусь к любыми
              делам: всегда укладываюсь в дедлайны, что на курсе, что в
              универе. Имею красный диплом бакалавра по технической специальности.

              Хобби: с дошкольного возраста все время читаю книги.
              Даже в деревне между играми брала книгу и читала.
              Минимальная скорость: 12 книг/год</p>
            <a className="about-me__link" href="https://github.com/sonyalivarenko" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__img" src={myPhoto} alt="Фото Софьи" />
        </div>
    </section>
  )
}