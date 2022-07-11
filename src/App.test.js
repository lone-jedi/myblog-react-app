import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pTag = screen.getByText(/Here is your joke :/i);
  expect(pTag).toBeInTheDocument();
});
