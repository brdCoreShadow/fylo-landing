import * as SC from "./ContactsStyled";

const Contacts: React.FC = () => {
  return (
    <SC.ContactsList>
      <li>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </li>
      <li>
        <a href="tel:+15431234567">+1-543-123-4567</a>
         <a href="email:example@fylo.com">example@fylo.com</a>
      </li>
      
    </SC.ContactsList>
  );
};

export default Contacts;
