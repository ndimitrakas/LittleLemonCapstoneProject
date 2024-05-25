import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ]);

  return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />

            </Routes>
            <Footer />
        </div>
    </Router>
  );
};

export default Main;
