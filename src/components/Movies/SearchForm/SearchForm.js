import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

export default function SearchForm(props) {

  const isSaved = props.isSaved;
  const isSavedClassName = (
    `search-form ${isSaved && 'search-form-saved'}`
  );

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(props.searchText, props.checkboxValue);
  }

  //const [film, setFilm] = useState("");
  const [errorFilm, setErrorFilm] = useState("");
  //const [checkboxValue, setCheckboxValue] = useState(props.defaultCheckboxValue)

  function handleChangeFilm(e) {
    props.setSearchText(e.target.value);
    if (!e.target.validity.valid) {
      setErrorFilm('Нужно ввести ключевое слово')
    } else {
      setErrorFilm("")
    }
  }

  function handleChangeValueCheckbox(e) {
    props.onCheckboxChange(e.target.checked);
  }

  return (
    <section>
      <form className={isSavedClassName} name="serch-form" noValidate onSubmit={handleSubmit}>
        <input className="search-form__input" type="text" name="search-input" placeholder="Фильм" required value={props.searchText || ''} onChange={handleChangeFilm} />
        <span className={`search-form__input-error ${(errorFilm !== "") && "search-form__input-error_active"}`}>{errorFilm}</span>
        <button className="search-form__button" type="submit">Найти</button>
        <FilterCheckbox onChange={handleChangeValueCheckbox} checked={props.checkboxValue} />
      </form>
    </section>
  )
}