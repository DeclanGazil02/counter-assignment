// import necessary react testing library helpers here
import { render, screen, fireEvent  } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count')
  expect(count.innerHTML).toBe('0')
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increments = screen.getByRole('button', { name: "+"})
  fireEvent.click(increments)
  const count = screen.getByTestId('count')
  expect(count.innerHTML).toBe('1')
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrements = screen.getByRole('button', { name: "-"})
  fireEvent.click(decrements)
  const count = screen.getByTestId('count')
  expect(count.innerHTML).toBe('-1')
});
