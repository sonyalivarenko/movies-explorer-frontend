import { useEffect } from "react";
import "../Profile.css";

export default function ProfileForm(props) {

  const isActive = props.isActive;
 
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return(
    <>
        <form className="profile__form" name="profile-form" onSubmit={handleSubmit}>
          <fieldset className="profile__data">
          <div className="profile__item">
            <label className="profile__label" htmlFor="profile__item-name">Имя</label>
            <input className="profile__input" 
                      type="text"
                      id="profile__item-name"
                      name="name"
                      required
                      minLength="2"
                      maxLength="30"
                      onChange={props.onChangeName}
                      value={props.name || ''} />
          </div>
          <div className="profile__item">
            <label className="profile__label" htmlFor="profile__item-email">E-mail</label>
            <input className="profile__input" 
                      type="email"
                      id="profile__item-email"
                      name="email"
                      required
                      onChange={props.onChangeEmail}
                      value={props.email || ''} />
            </div>
            <button className="profile__button-save" type="submit" disabled={isActive ? false : true}>Сохранить</button>
          </fieldset>
        </form>
    </>
  )
}