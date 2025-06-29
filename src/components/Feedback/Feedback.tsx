import * as SC from "./FeedbackStyled"

import avatarFirst from "../../assets/images/profile-1.jpg"
import avatarSecond from "../../assets/images/profile-2.jpg"
import avatarThird from "../../assets/images/profile-3.jpg"


const Feedback:React.FC = () => {
    return ( 
        <SC.FeedbackList>
            <li>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <SC.ProfileCon>
                    <SC.AvatarThumb><img src={avatarFirst} alt="avatarFirst" /></SC.AvatarThumb>
                    <div>
                        <h5>Satish Patel</h5>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </SC.ProfileCon>
            </li>
            <li>
                  <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <SC.ProfileCon>
                    <SC.AvatarThumb><img src={avatarSecond} alt="avatarFirst" /></SC.AvatarThumb>
                    <div>
                        <h5>Bruce McKenzie</h5>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </SC.ProfileCon>
            </li>
            <li>
                  <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <SC.ProfileCon>
                    <SC.AvatarThumb><img src={avatarThird} alt="avatarThird" /></SC.AvatarThumb>
                    <div>
                        <h5>Iva Boyd</h5>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </SC.ProfileCon>
            </li>
        </SC.FeedbackList>
     );
}
 
export default Feedback;