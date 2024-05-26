import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Header from './Header';
import Footer from './Footer';
import { fetchAPI } from '../api/API'

export const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
];

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload || initializeTimes();
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Function to fetch available times for today's date
    const fetchAvailableTimes = async (date) => {
        const times = await fetchAPI(date);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    // Fetch available times when component mounts
    useEffect(() => {
        fetchAvailableTimes(selectedDate);
    }, [selectedDate]);

  return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} setSelectedDate={setSelectedDate}/>} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
};

export default Main;
