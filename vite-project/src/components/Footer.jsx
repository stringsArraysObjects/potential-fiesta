import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

export const Footer = () => (
    <>
     <a href=''><FontAwesomeIcon icon={faInstagram} size='xl' className='fa-border' beat/></a>
     <a href=''><FontAwesomeIcon icon={faDiscord} size='xl' className='fa-border' spin/></a>
     <a href=''><FontAwesomeIcon icon={faXTwitter} size='xl' className='fa-border' /></a>
     <a href=''><FontAwesomeIcon icon={faGithub} size='xl' className='fa-border' shake/></a>
     <a href=''><FontAwesomeIcon icon={faLinkedinIn} size='xl' className='fa-border' bounce/></a>
    </>
)
