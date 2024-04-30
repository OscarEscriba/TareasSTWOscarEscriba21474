// componente de los inputs.
import React from 'react';

const inputs = ({ type, id, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      style={{
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default inputs;