// Button

import React from 'react';

const Button = ({ onClick, children, color }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: 'black',
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = hoverStyle.backgroundColor;
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = buttonStyle.backgroundColor;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
