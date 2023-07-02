import { ReactComponent as Wave } from '../assets/wave.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <Wave></Wave>
            <div className="bg-black text-white text-center">
          <div className="container mx-auto md:text-start md:grid md:grid-cols-2 p-5">
            <div className='py-10'>
              <p className='mb-7'>This website was created by Franklin Ramirez, 
                using <a href="https://react.dev/">React</a> & <a href="https://tailwindcss.com/">Tailwind CSS.</a></p>
              <p className='mb-7'>Credits to <a href="https://www.freecodecamp.org/">freeCodeCamp</a>,
                <a href="https://mathjs.org/"> MathJS,</a>
                <a href="https://getwaves.io/"> GetWaves.io</a> &
                <a href="https://fontawesome.com/"> FontAwesome.</a></p>
            </div>
            <div className='md:text-end'>
              <div className='grid justify-items-center md:justify-items-end'>
              <img
                className='w-48 mb-7'
                src={require('../assets/logo-white.png')}
                alt='logo' />
              </div>
              <div className='mb-7'>
                <a href="https://github.com/frankramirezsoto"><FontAwesomeIcon icon={faGithub} size='3x' className='p-2' /></a>
                <a href="https://www.linkedin.com/in/franklinramirezsoto/"><FontAwesomeIcon icon={faLinkedin} size='3x' className='p-2' /></a>
                <a href="https://github.com/frankramirezsoto"><FontAwesomeIcon icon={faGlobe} size='3x' className='p-2' /></a>
              </div>
              <p className='mb-7'>2023</p>
            </div>
          </div>
        </div>
        </footer>
    )
}

export default Footer;