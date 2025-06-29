import * as SC from "./SharedLayoutStyled";

import About from "../../comonents/About/About";
import Hero from "../../comonents/Hero/Hero";
import StayProductive from "../../comonents/StayProductive/StayProductive";


const SharedLayout: React.FC = () => {
  return (
    <SC.SharedLayoutCon>
      <Hero />
      <About/>
      <StayProductive/>
    </SC.SharedLayoutCon>
  );
};

export default SharedLayout;
