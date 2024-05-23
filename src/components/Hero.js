import React from 'react';
import restaurant from '../assets/restaurant.jpg'

function Hero() {
  return (
    <section className="hero">
        <div class='hero-content'>
            <h1>Welcome to Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Discover the vibrant flavors and warm ambiance
                of Little Lemon, your go-to destination for fresh,
                lemon-inspired dishes. Whether you're craving a zesty
                salad, a refreshing drink, or a mouthwatering entrée,
                our expertly crafted menu offers something for everyone.
                Join us for a delightful dining experience where each
                meal is a celebration of taste and quality.
                Come in and savor the best that Little Lemon has to offer.
            </p>
            <button>Reserve a Table</button>
        </div>
        <img src={restaurant} />
    </section>
  );
}

export default Hero;
