import React from 'react';
import reserved from '../assets/chef_food.jpg'

const BookingConfirmation = () => {
  return (
    <div className="booking-confirmation">
      <img src={reserved}/>
      <h2>Booking Confirmed!</h2>
      <p>Your booking has been confirmed.<br />We are looking forward to seeing you!</p>
    </div>
  );
};

export default BookingConfirmation;
