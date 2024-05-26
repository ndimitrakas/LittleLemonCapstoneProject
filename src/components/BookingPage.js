import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, setSelectedDate, submitForm }) => {
  return (
    <div className="booking-page">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} setSelectedDate={setSelectedDate} submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;
