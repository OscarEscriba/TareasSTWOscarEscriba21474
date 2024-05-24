import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './calculator.css';

const Calculator = () => {
  const [valorActual, setValorActual] = useState('');
  const [valorAnterior, setValorAnterior] = useState('');
  const [tipoOperacion, setTipoOperacion] = useState('');

  const handleButtonClick = (value) => {
    if (['+', '-', '*', '/', '%'].includes(value)) {
      setTipoOperacion(value);
      if (valorActual !== '') {
        setValorAnterior(valorActual);
        setValorActual('');
      }
    } else if (value === 'C') {
      setValorActual('');
      setValorAnterior('');
      setTipoOperacion('');
    } else if (value === '=') {
      calcularResultado();
    } else if (value === '+/-') {
      setValorActual(valorActual.startsWith('-') ? valorActual.substring(1) : '-' + valorActual);
    } else {
      if (valorActual.length < 9 || value === '.') {
        setValorActual(valorActual + value);
      }
    }
  };

  const calcularResultado = () => {
    const valorAnteriorFloat = parseFloat(valorAnterior);
    const valorActualFloat = parseFloat(valorActual);

    if (isNaN(valorActualFloat) || isNaN(valorAnteriorFloat) || tipoOperacion === '') return;

    let resultado;
    switch (tipoOperacion) {
      case '+':
        resultado = valorAnteriorFloat + valorActualFloat;
        break;
      case '-':
        resultado = valorAnteriorFloat - valorActualFloat;
        break;
      case '*':
        resultado = valorAnteriorFloat * valorActualFloat;
        break;
      case '/':
        resultado = valorAnteriorFloat / valorActualFloat;
        break;
      case '%':
        resultado = (valorAnteriorFloat / 100) * valorActualFloat;
        break;
      default:
        return;
    }

    setValorAnterior('');
    setValorActual(resultado.toString());
    setTipoOperacion('');
  };

  return (
    <div className="container">
      <div className="calculadora">
        <Display valorAnterior={valorAnterior} valorActual={valorActual} tipoOperacion={tipoOperacion} />
        {['7', '8', '9', '/', 
        '4', '5', '6', '*', 
        '1', '2', '3', '-', 
        '0', '.', 'C', '+', 
        '+/-','%', '='].map((buttonValue) => (
          <Button key={buttonValue} value={buttonValue} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

