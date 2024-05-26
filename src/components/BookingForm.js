import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, setSelectedDate, submitForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      const selectedDate = new Date(value + "T00:00:00");
      setSelectedDate(selectedDate);
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: formattedDate,
      }));
  } else {
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
      }));
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the submitForm function passed from the parent component
    submitForm(formData);
  };

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-field">
          <label>Name:</label>
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-field">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-field">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-field">
          <label>Time:</label>
          <select name="time" value={formData.time} onChange={handleChange}>
          {availableTimes && availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
          </select>
        </div>
        <div className="text-field">
          <label>Number of Guests:</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <div className="text-field">
            <label for="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
