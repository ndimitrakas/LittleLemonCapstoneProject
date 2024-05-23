// src/components/CustomersSay/CustomersSay.js
import React from 'react';

function Main() {
  const testimonials = [
    { id: 1, name: 'Jane Doe', feedback: 'Amazing food!', rating: 5 },
    { id: 2, name: 'John Smith', feedback: 'Great service!', rating: 4 },
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <ul>
        {testimonials.map(testimonial => (
          <li key={testimonial.id}>
            <p>"{testimonial.feedback}"</p>
            <p className="customer-name">- {testimonial.name}</p>
            <p className="customer-rating">Rating: {testimonial.rating} stars</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;

