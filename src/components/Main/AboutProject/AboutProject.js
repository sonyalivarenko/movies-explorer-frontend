import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className='about-project__text'>
        <div>
          <h3 className="about-project__text_title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className="about-project__text_title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text_subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__illustration">
        <p className="about-project__time">1&nbsp;неделя</p>
        <p className="about-project__time">4&nbsp;недели</p>
        <p className="about-project__time-text">Back-end</p>
        <p className="about-project__time-text">Front-end</p>
      </div>
    </section>
  )
}