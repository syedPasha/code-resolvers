import React from 'react';
import './App.css';
import './mobile.css';
import './widescreen.css';
import Navigationbar from './components/Navigationbar';
import Header from '../src/components/Header';
import Whatsection from './components/Whatsection';
import Whosection from './components/Whosection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigationbar/>
      <Header/>
      <Whatsection/>
      <Whosection/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
