import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, setSelectedDate }) => {
  return (
    <div className="booking-page">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} setSelectedDate={setSelectedDate}/>
    </div>
  );
};

export default BookingPage;
