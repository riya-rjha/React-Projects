import React from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import Main from './Components/Main.jsx';
import Services from './Components/Services.jsx';

const App = () => {
  return (
    <div className='bg-green-50 min-h-[100vh] min-w-[100vw]'>
      <Header />
      <Main />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App