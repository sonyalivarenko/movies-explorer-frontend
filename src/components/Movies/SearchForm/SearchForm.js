import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState, useEffect } from "react";

export default function SearchForm(props) { //компонент формы поиска фильмов
  const isSaved = props.isSaved;
  const isSavedClassName = (`search-form ${isSaved && 'search-form-saved'}`);
  const [errorFilm, setErrorFilm] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(props.checkboxValue)

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(props.searchText, props.checkboxValue);
  }

  useEffect(() => {
    if (checkboxValue !== props.checkboxValue) {
      props.onCheckboxChange(checkboxValue);
    }
  }, [checkboxValue, props.onCheckboxChange, props.checkboxValue, props]);

  function handleChangeFilm(e) {
    props.setSearchText(e.target.value);
    if (!e.target.validity.valid) {
      setErrorFilm('Нужно ввести ключевое слово')
    } else {
      setErrorFilm("")
    }
  }
//функция, изменяющая значение checkbox
 function handleChangeValueCheckbox(e) {
    setCheckboxValue(e.target.checked);
  }

  return (
    <section>
      <form className={isSavedClassName} name="serch-form" noValidate onSubmit={handleSubmit}>
        <input className="search-form__input" type="text" name="search-input" placeholder="Фильм" required value={props.searchText || ''} onChange={handleChangeFilm} />
        <span className={`search-form__input-error ${(errorFilm !== "") && "search-form__input-error_active"}`}>{errorFilm}</span>
        <button className="search-form__button" type="submit">Найти</button>
        <FilterCheckbox onChange={handleChangeValueCheckbox} checked={checkboxValue} />
      </form>
    </section>
  )
}
