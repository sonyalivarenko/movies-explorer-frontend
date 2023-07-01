import "../Profile.css";

export default function ProfileStatic(props) {

  return (
    <>
        <div className="profile__item">
          <p className="profile__label">Имя</p>
          <p className="profile__input">{props.name}</p>
        </div>
        <div className="profile__item">
          <p className="profile__label">E-mail</p>
          <p className="profile__input">{props.email}</p>
        </div>
      <button type="button" className="profile__edit profile__button" onClick={props.isOpen}>Редактировать</button>
      <button type="button" className="profile__exit profile__button" onClick={props.signOut}>Выйти из аккаунта</button>
    </>
  )
}