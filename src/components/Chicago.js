import React from 'react';
import chefs1 from  '../assets/chefs1.jpg';
import chefs2 from  '../assets/chefs2.jpg';

function Chicago() {
  return (
    <section className="chicago">
      <div className='chicago-content'>
        <h2>About Little Lemon Chicago</h2>
        <p>Little Lemon is a family-owned Mediterranean restaurant
          located in the heart of Chicago. We are known for our delicious
          lemon-themed dishes and welcoming atmosphere.</p>
      </div>
      <div className='image-container'>
        <img className="image-top" src={chefs1} alt='Our Chefs'/>
        <img className="image-bottom" src={chefs2} alt='Chef Family'/>
      </div>
    </section>
  );
}

export default Chicago;
