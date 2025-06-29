import * as SC from "./SharedLayoutStyled";

import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import StayProductive from "../../components/StayProductive/StayProductive";
import Feedback from "@/components/Feedback/Feedback";
import ContactUs from "@/components/ContactUs/ContactUs";


const SharedLayout: React.FC = () => {
  return (
    <SC.SharedLayoutCon>
      <Hero />
      <About/>
      <StayProductive/>
      <Feedback/>
      <ContactUs/>
    </SC.SharedLayoutCon>
  );
};

export default SharedLayout;
