import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Us from './Components/Us';
import Order from './Components/Order';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Service/>
      <Us/>
      <Order/>
      <Footer/>
    </>
  );
}

export default App;
