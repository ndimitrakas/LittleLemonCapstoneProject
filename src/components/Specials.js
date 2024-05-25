// src/components/Specials/Specials.js
import React from 'react';
import dessert from '../assets/dessert.jpg';
import salad from '../assets/salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import order from '../assets/order.svg'

function Specials() {
  const specials = [
    { id: 1, name: 'Lemon Tart', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', price: '$5.00' , image: dessert},
    { id: 2, name: 'Lemon Chicken', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ', price: '$10.00', image: salad},
    { id: 3, name: 'Lemon Tart', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ', price: '$5.00', image: bruchetta}
  ];

  return (
    <section className="specials">
      <div className='specials-header'>
        <h2>Today's Specials</h2>
        <button>Menu</button>
      </div>
      <ul>
        <div className='specials-card-view'>
            {specials.map(special => (
                <li key={special.id}>
                    <img src={special.image} alt='special dish'/>
                    <div className='specials-card-header'>
                        <h3>{special.name}</h3>
                        <h3 id='price'>{special.price}</h3>
                    </div>
                    <p>{special.description}</p>
                    <div className='specials-card-footer'>
                        <h3>Order a delivery</h3>
                        <img src={order} alt='order icon'/>
                    </div>
                </li>
            ))}
        </div>
      </ul>
    </section>
  );
}

export default Specials;
