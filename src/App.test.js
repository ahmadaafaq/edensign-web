import { render, screen } from '@testing-library/react';
import App from './App';

test('renders multiple components with react router navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/Edensign app/i);
  expect(linkElement).toBeInTheDocument();
});
