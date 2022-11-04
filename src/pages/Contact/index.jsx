import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'
import {
  Address,
  AddressWrapper,
  ContactContainer,
  ContactContent,
  Content,
  TitleStyled,
} from './ContactElements'
import ContactForm from '../../components/ContactForm'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

function Contact() {
  const { theme } = useContext(ThemeContext)

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ width: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <ContactContainer isDarkMode={theme === 'dark'}>
        <TitleStyled>
          Une question? ou autres choses? n'hesitez pas à me contacter !{' '}
        </TitleStyled>

        <ContactContent>
          <AddressWrapper isDarkMode={theme === 'dark'}>
            <h3> Ci-dessous mes contacts </h3>

            <Content>
              <Address>
                <FiPhone />
                <h4>Téléphone</h4>
                <span>07-51-56-86-53</span>
              </Address>

              <Address>
                <FiMail />
                <h4>Email</h4>
                <span>agbarry73@gmail.com </span>
                <a
                  href="mailto:agbarry73@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ecrivez-moi <HiArrowRight />
                </a>
              </Address>

              <Address>
                <FaWhatsapp />
                <h4>Whatsapp</h4>
                <a
                  href="https://api.whatsapp.com/send?phone=+33751568653&text=Bonjour !"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ecrivez-moi <HiArrowRight />
                </a>
              </Address>

              <Address>
                <FiMapPin />
                <h4>Adresse</h4>
                <span>6 rue chateaubriand, 33400 Talence</span>
              </Address>
            </Content>
          </AddressWrapper>

          <ContactForm />
        </ContactContent>
      </ContactContainer>
    </motion.div>
  )
}

export default Contact
