function Header() {

    return (
        <div className='md:columns-2'>
          <img
            className='mx-auto md:mx-0 w-64 md:w-52 py-4'
            src={require('../assets/logo-white.png')}
            alt='logo' />
          <h1 className='py-8 text-3xl text-center md:text-end text-white'>Calculator</h1>
    </div>
    )   
}

export default Header;