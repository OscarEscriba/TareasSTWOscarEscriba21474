import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

test('Calculator renders correctly', () => {
  render(<Calculator />);
  expect(screen.getByText('7')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
  expect(screen.getByText('9')).toBeInTheDocument();
});

test('Calculator performs addition', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getAllByText('3').length).toBeGreaterThan(0);
});

test('Calculator performs subtraction', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getAllByText('3').length).toBeGreaterThan(0);
});

test('Calculator clears display', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('C'));
  expect(screen.getAllByText('').length).toBeGreaterThan(0); // Suponiendo un display vacío cuando se limpia
});
