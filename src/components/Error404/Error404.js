import { useNavigate } from "react-router-dom";
import "./Error404.css";

export default function Error404() {

  const navigate = useNavigate();

  const navigateBack = (evt) => {
      navigate(-1);
  };

  return(
    <main>
      <section className="error">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
        <button type="button" className="error__back" onClick={navigateBack}>Назад</button>
      </section>
    </main>
  )
}