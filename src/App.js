import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {

  return (
    <div className='App bg-gradient-to-r from-cyan-300 via-sky-500 to-teal-500 h-full font-mono'>
      {/*Header*/}
      <header className='container mx-auto p-4'>
        <Header />
      </header>

      {/*Body*/}
      <main className="container mx-auto md:w-96 p-5 pb-16">
        <Calculator></Calculator>
      </main>

      {/*Footer*/}
      <Footer/>
    </div>
  );
}

export default App;
