import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;
