import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('suma 1 + 2 = 3', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(getByDisplayValue('3')).toBeInTheDocument();
});

test('resta 5 - 3 = 2', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);

  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  expect(getByDisplayValue('2')).toBeInTheDocument();
});

test('multiplicación 4 * 2 = 8', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);

  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(getByDisplayValue('8')).toBeInTheDocument();
});

test('división 6 / 2 = 3', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);

  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(getByDisplayValue('3')).toBeInTheDocument();
});

test('módulo 7 % 3 = 1', () => {
  const { getByText, getByDisplayValue } = render(<Calculator />);

  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('%'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));

  expect(getByDisplayValue('1')).toBeInTheDocument();
});
