import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Ratings from './components/Ratings';
import Chicago from './components/Chicago';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Ratings />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;
