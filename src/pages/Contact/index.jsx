import styled from 'styled-components';
import colors from '../../utils/style/colors';


const TitleStyled = styled.h5`
    font-size: 2.0rem;
    padding: 15px;
    text-align: center;
`

const CardStyled = styled.div`
    padding: 15px;

    & iframe {
        border-radius: 30% 10%;
    }
`
const AddressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${colors.color6};
    text-transform: lowercase;
`

const AddressStyled = styled.span`
    padding: 15px;
    font-size: 1.2rem;

    & i {
        color: ${colors.special};
        padding-right: 10px;
    }
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px) {
        ${TitleStyled} {
            font-size: 1.5rem;
        }

        ${AddressContainer} {
            flex-direction: column;
        }

        ${AddressStyled} {
            font-size: 1.0rem;
        }
    }

`


function Contact() {
  return (
    <ContactContainer>
      <div className="descript">
        <TitleStyled> Une question? ou autres choses? n'hesitez pas à me contacter ! </TitleStyled>
        
        <AddressContainer>
            <AddressStyled> 
                <i className="fas fa-mobile" /> 
                07-51-56-86-53  
            </AddressStyled>
            
            <AddressStyled> 
                <i className="fas fa-envelope-square"/> 
                aguiboubarry73@gmail.com 
            </AddressStyled>

            <AddressStyled> 
                <i className="fas fa-map-marker-alt" />   
                6 rue chateaubriand
            </AddressStyled>
        </AddressContainer>
      </div>

      <CardStyled>
        <iframe title='Mon adresse actuelle' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.439985320471!2d-0.5906699848616964!3d44.7922211860499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527426d60f443%3A0x8c99a3cb9b8067ee!2s6%20Rue%20Chateaubriand%2C%2033400%20Talence!5e0!3m2!1sfr!2sfr!4v1637447995552!5m2!1sfr!2sfr" />
      </CardStyled>
    </ContactContainer>
  );
}

export default Contact;
