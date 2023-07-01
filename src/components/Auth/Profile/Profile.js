import React, { useEffect } from "react";
import "./Profile.css";
import Header from "../../Header/Header";
import ProfileStatic from "./ProfileStatic/ProfileStatic";
import ProfileForm from "./ProfileForm/ProfileForm";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
import mainApi from "../../../utils/MainApi";

export default function Profile(props) {

const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);
const [isActive, setIsActive] = useState(false);

  function handleProfileClick() {
    setIsProfileFormOpen(true);
  }

  function closeProfileForm() {
    setIsProfileFormOpen(false)
  }
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  useEffect(() => {
    if (isProfileFormOpen) {
    setIsActive(false)}
  }, [isProfileFormOpen])

  function handleChangeName(e) {
    console.log(name)
    setName(e.target.value);
    if (e.target.value === currentUser.name) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser(name,email)
  }

  function handleUpdateUser(name,email) {
    mainApi.setProfileInfo({name, email})
    .then((res) => {
      props.onUpdateUser(res);
    })
    .catch((err) => {
      console.log(err); 
    });
    closeProfileForm()
  }

  return (
    <>
      <Header isMain={false} loggedIn={props.loggedIn} onOpenHeaderNav={props.onOpenHeaderNav} />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {name}</h1>
          {isProfileFormOpen ? <ProfileForm name={name} 
                                            email={email} 
                                            onSubmit={handleSubmit}
                                            onChangeName={handleChangeName}
                                            onChangeEmail={handleChangeEmail}
                                            isActive={isActive} /> 
          : <ProfileStatic isOpen={handleProfileClick} 
                           signOut={props.signOut} 
                           name={name} 
                           email={email} />}
        </section>
      </main>
    </>
  )
}