// src/HomePage.js
import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Ratings from './Ratings';
import Chicago from './Chicago';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Ratings />
      <Chicago />
    </>
  );
};

export default HomePage;
