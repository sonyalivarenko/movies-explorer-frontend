import "./Techs.css"

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="about-project__title">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__table">
        <li className="techs__cell">HTML</li>
        <li className="techs__cell">CSS</li>
        <li className="techs__cell">JS</li>
        <li className="techs__cell">React</li>
        <li className="techs__cell">Git</li>
        <li className="techs__cell">Express.js</li>
        <li className="techs__cell">mongoDB</li>
      </ul>
    </section>
  )
}