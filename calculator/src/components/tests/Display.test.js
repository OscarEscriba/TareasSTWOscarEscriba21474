import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../Display';

test('Display shows correct values', () => {
  render(<Display valorAnterior="123" valorActual="456" tipoOperacion="+" />);
  expect(screen.getByText('123 +')).toBeInTheDocument();
  expect(screen.getByText('456')).toBeInTheDocument();
});
