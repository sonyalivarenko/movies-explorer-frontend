import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__content">
          <a className="portfolio__link" target="_blank" href="https://github.com/sonyalivarenko/how-to-learn" rel="noreferrer">
            <p className="portfolio__text">Статичный сайт</p>
          </a>
        </li>
        <li className="portfolio__content">
          <a className="portfolio__link" target="_blank" href="https://github.com/sonyalivarenko/hotel-booking" rel="noreferrer">
            <p className="portfolio__text">Адаптивный сайт</p>
          </a>
        </li>
        <li className="portfolio__content">
          <a className="portfolio__link" target="_blank" href="https://github.com/sonyalivarenko/react-mesto-api-full-gha" rel="noreferrer">
            <p className="portfolio__text">Одностраничное приложение</p>
          </a>
        </li>
      </ul>
    </section>
  )
}