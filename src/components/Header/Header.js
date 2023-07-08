import React from 'react';
import "./Header.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from '../Logo/Logo';

export default function Header(props) {

  const [width, setWidth] = React.useState(window.innerWidth);

  const isMain = props.isMain;
  const isHeaderClassName = (
    `header ${isMain && 'header_section_main'}`
  );

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return(
    <>
    <header className={isHeaderClassName}>
      <Logo />
      <div>
        {!props.loggedIn ? props.children : width > 768 ? <HeaderNav isDesktop={true} /> : <HeaderNav isDesktop={false} onOpenHeaderNav={props.onOpenHeaderNav} />}
      </div>
    </header>
    
    </>
  )
}