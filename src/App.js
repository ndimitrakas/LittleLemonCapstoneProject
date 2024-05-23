import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ratings from './components/Ratings';
import Chicago from './components/Chicago';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Ratings />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;
