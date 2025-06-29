import * as SC from "./HeroStyled"

import heroMobPic from "../../assets/images/illustration-intro.png";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon>
      <SC.HeroThumb>
        <img src={heroMobPic} alt="heroPic" />
      </SC.HeroThumb>
      <SC.HeroContentCon>
        <h3>All your files in one secure location, accessible anywhere.</h3>
        <p>
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
      </SC.HeroContentCon>
      <SC.HeroBtn type="button">Get Started</SC.HeroBtn>
    </SC.HeroCon>
  );
};

export default Hero;
