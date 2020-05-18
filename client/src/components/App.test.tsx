import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders good luck message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Best of luck for the interview :\)/i);
  expect(linkElement).toBeInTheDocument();
});
