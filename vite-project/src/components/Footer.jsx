
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';





export const Footer = () => (
    <>
     <a href='https://www.linkedin.com/in/masontuff/'><FontAwesomeIcon icon={faLinkedinIn} size='xl' className='fa-border' bounce/></a>
     <a href='https://x.com/yes_myliege'><FontAwesomeIcon icon={faXTwitter} size='xl' className='fa-border' spin/></a>
     <a href='https://github.com/stringsArraysObjects'><FontAwesomeIcon icon={faGithub} size='xl' className='fa-border' shake/></a>
    </>
)

export default Footer