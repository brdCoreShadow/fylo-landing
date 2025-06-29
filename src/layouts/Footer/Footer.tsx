import * as SC from "./FooterStyled"

import logoIcon from "../../assets/images/logo.svg";
import Contacts from "@/components/Contacts/Contacts";
import NavCom from "@/components/NavCom/NavCom";
import SocNet from "@/components/SocNet/SocNet";

const Footer: React.FC = () => {
  return (
    <SC.FooterCon>
      <SC.FooterLogoThumb>
        <img src={logoIcon} alt="logo" />
      </SC.FooterLogoThumb>
     <Contacts/>
     <NavCom/>
     <SocNet/>
    </SC.FooterCon>
  );
};

export default Footer;
