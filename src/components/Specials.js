// src/components/Specials/Specials.js
import React from 'react';

function Specials() {
  const specials = [
    { id: 1, name: 'Lemon Tart', description: 'Delicious lemon tart', price: '$5.00' , image: ""},
    { id: 2, name: 'Lemon Chicken', description: 'Tasty lemon chicken', price: '$10.00', image: ""},
    { id: 3, name: 'Lemon Tart', description: 'Delicious lemon tart', price: '$5.00', image: ""},
    { id: 4, name: 'Lemon Chicken', description: 'Tasty lemon chicken', price: '$10.00', image: ""},
  ];

  return (
    <section className="specials">
      <div class='specials-header'>
        <h2>Today's Specials</h2>
        <button>Menu</button>
      </div>
      <ul>
        <div class='specials-card-view'>
            {specials.map(special => (
                <li key={special.id}>
                    <h3>{special.name}</h3>
                    <p>{special.description}</p>
                    <p>{special.price}</p>
                </li>
            ))}
        </div>
      </ul>
    </section>
  );
}

export default Specials;
