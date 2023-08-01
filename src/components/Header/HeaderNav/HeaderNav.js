import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

export default function HeaderNav(props) {

  
  const isDesktop = props.isDesktop;


   if (isDesktop) {
   return (
      <HeaderDesktop />
    )
   } else {
    return (
      <HeaderMobile onOpenHeaderNav={props.onOpenHeaderNav} isOpen={props.isOpen}/>
    )
   }
}