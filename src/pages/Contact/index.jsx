import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from "framer-motion";
import {
  AddressContainer,
  // CardStyled,
  ContactContainer,
  TitleStyled,
} from "./ContactElements";


function Contact() {
  // const iframeSource = '<iframe title="Mon adresse actuelle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.439985320471!2d-0.5906699848616964!3d44.7922211860499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527426d60f443%3A0x8c99a3cb9b8067ee!2s6%20Rue%20Chateaubriand%2C%2033400%20Talence!5e0!3m2!1sfr!2sfr!4v1637447995552!5m2!1sfr!2sfr"> </iframe>'
  
  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <ContactContainer>
        <div>
          <TitleStyled>
            Une question? ou autres choses? n'hesitez pas à me contacter !{" "}
          </TitleStyled>

          <AddressContainer>
            <span>
              <FiPhone /> 07-51-56-86-53
            </span>

            <span>
              <FiMail /> aguiboubarry73@gmail.com
            </span>

            <span>
              <FiMapPin /> 6 rue chateaubriand, 33400 Talence
            </span>
          </AddressContainer>
        </div>

        {/* <CardStyled dangerouslySetInnerHTML={{__html: iframeSource}} />  */}
      </ContactContainer>
    </motion.div>
  );
}

export default Contact;
