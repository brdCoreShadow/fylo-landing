import * as SC from "./NavComStyled"

const NavCom:React.FC = () => {
    return ( 
        <SC.NavComCon>
            <SC.NavList>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Jobs</a>
                </li>
                <li>
                    <a href="#">Press</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </SC.NavList>
            <SC.NavList>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </SC.NavList>
        </SC.NavComCon>
     );
}
 
export default NavCom;