import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

test('Button renders with correct value', () => {
  render(<Button value="1" onClick={() => {}} />);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('Button calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button value="1" onClick={handleClick} />);
  fireEvent.click(screen.getByText('1'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
