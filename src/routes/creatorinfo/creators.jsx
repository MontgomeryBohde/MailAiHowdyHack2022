import "./creators.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Creators() {
  return (
    <>
      <div className= "main">
        <h1 className="Title">mail.AI was created at HowdyHack2022 By:</h1>
        <h2 className="Monte">Montgomery Bohde, Full Stack God <a href="https://www.linkedin.com/in/montgomery-bohde/" target= "_blank" style={{ textDecoration: 'none' }} className='linkedin-icon'><FontAwesomeIcon icon={faLinkedin} /></a></h2>
        <h2 className='Aayush'>Aayush Garg, Frontend Engineer <a href="https://www.linkedin.com/in/aayushg1414/" target= "_blank" style={{ textDecoration: 'none' }} className='linkedin-icon'><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://instagram.com/aayush.g15/" target= "_blank" style={{ textDecoration: 'none' }} className='instagram-icon'><FontAwesomeIcon icon={faInstagram} /> </a></h2>
        <h2 className="Akshay">Akshay Belhe, UI/UX + Frontend <a href="https://www.linkedin.com/in/akshaybelhe/" target= "_blank" style={{ textDecoration: 'none' }} className='linkedin-icon'><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://medium.com/@akshaybelhe" target= "_blank" style={{ textDecoration: 'none' }} className='medium-icon'><FontAwesomeIcon icon={faMedium} /> </a></h2>
        <h2 className="Aditya">Aditya Nambi (Flu) <a href="https://www.linkedin.com/in/adityanambi/" target= "_blank" style={{ textDecoration: 'none' }} className='linkedin-icon'><FontAwesomeIcon icon={faLinkedin} /></a></h2>
      </div>
    </>
  );
}
