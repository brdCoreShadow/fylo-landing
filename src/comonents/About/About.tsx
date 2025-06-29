import * as SC from "./AboutStyled";

import accessAnywhereIcon from "../../assets/images/icon-access-anywhere.svg";
import securityIcon from "../../assets/images/icon-security.svg";
import collaborationIcon from "../../assets/images/icon-collaboration.svg"
import anyFileIcon from "../../assets/images/icon-any-file.svg"
const About = () => {
  return (
    <SC.AboutList>
      <li>
        <SC.AboutIconThumb>
          <img src={accessAnywhereIcon} alt="accessAnywhereIcon" />
        </SC.AboutIconThumb>
        <div>
          <h4>Access your files, anywhere</h4>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </li>
      <li>
        <SC.AboutIconThumb>
          <img src={securityIcon} alt="securityIcon" />
        </SC.AboutIconThumb>
        <div>
          <h4>Security you can trust</h4>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </li>
      <li>
         <SC.AboutIconThumb>
          <img src={collaborationIcon} alt="collaborationIcon" />
        </SC.AboutIconThumb>
        <div>
          <h4>Real-time collaboration</h4>
          <p>
           Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
        </div>
      </li>
      <li>
         <SC.AboutIconThumb>
          <img src={anyFileIcon} alt="anyFileIcon" />
        </SC.AboutIconThumb>
        <div>
          <h4>Store any type of file</h4>
          <p>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
          </p>
        </div>
      </li>
    </SC.AboutList>
  );
};

export default About;
