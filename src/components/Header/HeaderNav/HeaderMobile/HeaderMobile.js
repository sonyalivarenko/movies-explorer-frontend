import "./HeaderMobile.css";

export default function HeaderMobile(props) {

   return (
    <section className="header-mobile">
      <button className="header-mobile__button" type="button" onClick={props.onOpenHeaderNav}></button>
    </section>
    )
   }