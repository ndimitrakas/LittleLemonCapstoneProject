import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Skip the test
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

