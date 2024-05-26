import React, { useEffect, useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Header from './Header';
import Footer from './Footer';
import ConfirmedBooking from './BookingConfirmation';
import { fetchAPI, submitAPI } from '../api/API'

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload;
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, []);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();

    const fetchAvailableTimes = async (date) => {
        const times = await fetchAPI(date);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    useEffect(() => {
        fetchAvailableTimes(selectedDate);
    }, [selectedDate]);
    const submitForm = async (formData) => {
        try {
            const response = await submitAPI(formData);
            if (response) {
                navigate('/booking-confirmed');
            } else {
                alert('Failed to submit booking.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit booking.');
        }
    };

  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} setSelectedDate={setSelectedDate} submitForm={submitForm}/>} />
            <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default Main;
