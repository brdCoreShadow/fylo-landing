import Hero from "../../comonents/Hero/Hero";
import * as SC from "./SharedLayoutStyled";


const SharedLayout: React.FC = () => {
  return (
    <SC.SharedLayoutCon>
      <Hero />
    </SC.SharedLayoutCon>
  );
};

export default SharedLayout;
