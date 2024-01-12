import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

test('renders learn react link', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});