import { useState, useEffect } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox(props) {

  //let isChecked = {inactive:props.checked};

  /* function handleChangeValueCheckbox(e) {
    props.onChange(e);
    console.log(isChecked.inactive)
  } */

  return (
    <label className="checkbox">
      <input className="checkbox__input-invisible"
             type="checkbox" 
             name="checkbox-film" 
             onClick={props.onChange}
             />
      <span className="checkbox__input-visible" />
      <span className="checkbox__label">Короткометражки</span>
    </label>
  )
}