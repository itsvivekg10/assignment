import React, { useState } from 'react';

function Card() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(prev => !prev);
  };

  const buttonStyle = {
    color: isOn ? 'green' : 'red',
    fontSize: '24px',
    cursor: 'pointer',
    border: '2px solid',
    padding: '10px 20px',
    borderColor: isOn ? 'green' : 'red',
    backgroundColor: 'white',
    borderRadius: '5px',
  };

  return (
    <button onClick={toggle} style={buttonStyle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Card;
