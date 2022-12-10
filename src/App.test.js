import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getByText(/learn react/i);
  expect(linkElements).toBeInTheDocument();
});
