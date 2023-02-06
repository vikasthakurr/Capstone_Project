import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Us from './Components/Us';
import Order from './Components/Order';


function App() {
  return (
    <>
      <Navbar/>
      <Service/>
      <Us/>
      <Order/>
    </>
  );
}

export default App;
