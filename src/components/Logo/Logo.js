import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"
import "./Logo.css"


export default function Logo(props) {

  return(
    <>
      <Link to="/" className="logo">
        <img src={logo} alt="Логотип" />
      </Link>
    </>
  )
}

