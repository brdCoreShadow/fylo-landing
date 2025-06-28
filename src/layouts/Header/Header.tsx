import * as SC from "./HeaderStyled";

import logoIcon from "../../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <SC.HeaderCon>
      <SC.LogoThumb>
        <img src={logoIcon} alt="logo" />
      </SC.LogoThumb>
      <SC.NavList>
        <li>
            <a href="#">Features</a>
        </li>
        <li>
            <a href="#">Team</a>
        </li>
        <li>
            <a href="#">Sign In</a>
        </li>
      </SC.NavList>
    </SC.HeaderCon>
  );
};

export default Header;
