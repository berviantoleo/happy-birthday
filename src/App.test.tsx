import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders happy birthday', () => {
  render(<App />);
  const linkElement = screen.getByText(/happy birthday/i);
  expect(linkElement).toBeInTheDocument();
});
