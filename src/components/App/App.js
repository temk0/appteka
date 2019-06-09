import React from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from'../Footer/Footer';
import datatest from '../../datatest'

function App() {

  return (
      <div className="container-fluid bg-light">
        <Header />
        <Main  />
        <Footer />
      </div>
  );
}

export default App;
