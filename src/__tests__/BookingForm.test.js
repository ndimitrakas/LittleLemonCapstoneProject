import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';

// Mock props
const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const dispatch = jest.fn();

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the Name label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const nameLabel = screen.getByText("Name:");
    expect(nameLabel).toBeInTheDocument();
});

test('Renders the Email label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const emailLabel = screen.getByText("Email:");
    expect(emailLabel).toBeInTheDocument();
});

test('Renders the Phone label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const phoneLabel = screen.getByText("Phone:");
    expect(phoneLabel).toBeInTheDocument();
});

test('Renders the Date label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const dateLabel = screen.getByText("Date:");
    expect(dateLabel).toBeInTheDocument();
});

test('Renders the Time label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const timeLabel = screen.getByText("Time:");
    expect(timeLabel).toBeInTheDocument();
});

test('Renders the Number of Guests label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const guestsLabel = screen.getByText("Number of Guests:");
    expect(guestsLabel).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
});

test('Renders the Book Now button', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const buttonElement = screen.getByText("Book Now");
    expect(buttonElement).toBeInTheDocument();
});
