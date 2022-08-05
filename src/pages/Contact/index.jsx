import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import {
  AddressContainer,
  AddressStyled,
  CardStyled,
  ContactContainer,
  TitleStyled,
} from "./ContactElements";


function Contact() {
  return (
    <ContactContainer>
      <div className="descript">
        <TitleStyled>
          Une question? ou autres choses? n'hesitez pas à me contacter !{" "}
        </TitleStyled>

        <AddressContainer>
          <AddressStyled>
            <FiPhone /> 07-51-56-86-53
          </AddressStyled>

          <AddressStyled>
            <FiMail /> aguiboubarry73@gmail.com
          </AddressStyled>

          <AddressStyled>
            <FiMapPin /> 6 rue chateaubriand
          </AddressStyled>
        </AddressContainer>
      </div>

      <CardStyled>
        <iframe
          title="Mon adresse actuelle"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.439985320471!2d-0.5906699848616964!3d44.7922211860499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527426d60f443%3A0x8c99a3cb9b8067ee!2s6%20Rue%20Chateaubriand%2C%2033400%20Talence!5e0!3m2!1sfr!2sfr!4v1637447995552!5m2!1sfr!2sfr"
        />
      </CardStyled>
    </ContactContainer>
  );
}

export default Contact;
