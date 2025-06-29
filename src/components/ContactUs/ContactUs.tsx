import * as SC from "./ContactUsStyled";

const ContactUs: React.FC = () => {
  return (
    <SC.ContactUsCon>
      <SC.ContactUsContentCon>
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </SC.ContactUsContentCon>
      <SC.ContactUsForm>
        <input type="text" placeholder="email@example.com" />
        <button>Get Started For Free</button>
      </SC.ContactUsForm>
    </SC.ContactUsCon>
  );
};

export default ContactUs;
