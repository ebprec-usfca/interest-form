import { render, screen } from '@testing-library/react';
import WebForm from './webForm';

test('renders learn react link', () => {
  render(<WebForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
