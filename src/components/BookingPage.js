import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
  return (
    <div className="booking-page">
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </div>
  );
};

export default BookingPage;
