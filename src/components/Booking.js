import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., sending the data to a backend server
    console.log('Form submitted:', formData);
    alert('Booking confirmed!');
  };

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-field">
          <label>Name:</label>
          <input
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
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
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

export default BookingPage;
