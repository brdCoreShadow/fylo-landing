import * as SC from "./SocNetStyled"

import fbIcon from "../../assets/images/fbIcon.svg"
import twitterIcon from "../../assets/images/twitterIcon.svg"
import istgramIcon from "../../assets/images/instagramIcon.svg"

const SocNet:React.FC = () => {
    return ( 
        <SC.SocNetList>
            <li>
                <a href="#">
                    <img src={fbIcon} alt="fbIcon" />
                </a>
            </li>
            <li>
                 <a href="#">
                    <img src={twitterIcon} alt="twitterIcon" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={istgramIcon} alt="istgramIcon" />
                </a>
            </li>
        </SC.SocNetList>
     );
}
 
export default SocNet;