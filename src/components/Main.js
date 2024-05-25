import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './Booking';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
  return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
};

export default Main;
