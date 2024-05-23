// src/components/CustomersSay/CustomersSay.js
import React from 'react';
import ratings from '../assets/rating.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';

function Ratings() {
  const testimonials = [
    { id: 1, name: 'Jane Doe', feedback: 'Amazing food!', rating: 5, image: person1},
    { id: 2, name: 'John Smith', feedback: 'Great service!', rating: 5, image: person2},
    { id: 3, name: 'Jane Loe', feedback: 'Amazing food!', rating: 5, image: person3},
    { id: 4, name: 'Joe Mith', feedback: 'Great service!', rating: 5, image: person4}
  ];

  return (
    <section className="ratings">
      <div class='ratings-header'>
        <h2>Testimonials</h2>
      </div>
      <ul>
        {testimonials.map(testimonial => (
          <li key={testimonial.id}>
            <img class="customer-ratings" src={ratings} alt='5 stars'/>
            <h3>"{testimonial.feedback}"</h3>
            <div class='customer-info'>
              <img class="customer-profile-images" src={testimonial.image} alt='individual persons headshot'/>
              <p className="customer-name">{testimonial.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ratings;

