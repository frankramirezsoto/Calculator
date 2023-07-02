import Calculator from './components/Calculator';
import { ReactComponent as Wave } from './assets/wave.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <div className='App bg-gradient-to-r from-cyan-300 via-sky-500 to-teal-500 h-full font-mono'>
      {/*Header*/}
      <header className='container mx-auto p-4'>
        <div className='md:columns-2'>
          <img
            className='mx-auto md:mx-0 w-64 md:w-52 py-4'
            src={require('./assets/logo-white.png')}
            alt='logo' />
          <h1 className='py-8 text-3xl text-center md:text-end text-white'>Calculator</h1>
        </div>
      </header>

      {/*Body*/}
      <main className="container mx-auto md:w-96 p-5 pb-16">
        <Calculator></Calculator>
      </main>

      {/*Footer*/}
      <footer>
        <Wave></Wave>
        <div className="bg-black text-white text-center">
          <div className="container mx-auto md:text-start md:grid md:grid-cols-2 p-5">
            <div className='py-10'>
              <p className='mb-7'>This website was created as part of the portofolio of Franklin Ramirez
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
                src={require('./assets/logo-white.png')}
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
    </div>
  );
}

export default App;
