import * as SC from "./StayProductiveStyled"

import stayProductiveIcon from "../../assets/images/illustration-stay-productive.png"

const StayProductive: React.FC = () => {
  return (
    <SC.StayProductiveCon>
      <SC.StayProductiveIconThumb>
        <img src={stayProductiveIcon} alt="stayProductiveIcon" />
      </SC.StayProductiveIconThumb>
      <SC.StayProductiveContentCon>
        <h4>Stay productive, wherever you are</h4>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a href="#">See how Fylo works</a>
      </SC.StayProductiveContentCon>
    </SC.StayProductiveCon>
  );
};

export default StayProductive;
