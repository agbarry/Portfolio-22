import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ContactFormWrapper, FormContent, FormSubmit, FormWrapper, HandStyled } from '../../pages/Contact/ContactElements'
import { FaHandPointDown } from 'react-icons/fa'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

function ContactForm() {
  const { theme } = useContext(ThemeContext)
  const [result, setResult] = useState(false)
  const [succes, setSucces] = useState(true)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dudldx8',
        'template_j54xzhi',
        form.current,
        'rLt7Ub7EB6nc3T6Z5'
      )
      .then(
        (result) => {
          setSucces(true);
          setResult(true);
        },
        (error) => {
          setSucces(false);
          setResult(true);
        }
      )
    e.target.reset()
  }

  setTimeout(() => {
    setResult(false)
  }, 5000)

  return (
    <ContactFormWrapper isDarkMode={theme === "dark"}>
      <h3> Me contacter directement ici !</h3>

      <HandStyled  isDarkMode={theme === "dark"}> <FaHandPointDown /> </HandStyled>

      <FormWrapper ref={form} onSubmit={sendEmail}>
        <FormContent>
          <label>
            Nom <span>*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            required
          />
        </FormContent>

        <FormContent>
          <label>
            Email <span>*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="ex:myname@example.com"
            required
          />
        </FormContent>

        <FormContent>
          <label>
            Entreprise <span>*</span>
          </label>

          <input
            type="text"
            name="company"
            placeholder="Votre entreprise"
            required
          />
        </FormContent>

        <FormContent>
          <label>
            Sujet <span>*</span>
          </label>

          <input type="text" name="subject" placeholder="Sujet" />
        </FormContent>

        <FormContent>
          <label>
            Message <span>*</span>
          </label>

          <textarea
            name="message"
            rows="10"
            placeholder="Votre message"
            required
          ></textarea>
        </FormContent>

        <FormSubmit type="submit"> Envoyer </FormSubmit>
      </FormWrapper>

      <div>
        {result && (
          succes ? (
            <p>
              Votre message a été envoyer avec succès, je reviendrai vers vous
              dès que possible !
            </p>
          ) : (
            <p>Erreur, veuillez reéssayer ulterieurement</p>
          )
        )}
      </div>
    </ContactFormWrapper>
  )
}

export default ContactForm
