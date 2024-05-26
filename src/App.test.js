import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders Main component in App', () => {
  const { getByTestId } = render(<App />); // Render your App component
  const mainComponent = getByTestId('main-component'); // Assuming your Main component has a test ID

  expect(mainComponent).toBeInTheDocument(); // Check if the Main component is in the document
});