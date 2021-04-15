import React from 'react';
import BootButton from 'react-bootstrap/Button';

const Button = (props) => {
  const character = props.value;

  const getValue = () => {
    let screen = document.getElementById('display');

    if (props.flag) {
      screen.value = '';
      props.setFlag(false);
    }

    if (screen.value.length < 9) {
      screen.value += character;
    }
    else {
      alert('La cantidad máxima de caracteres es 9.');
    }
  };

  return (
    <BootButton className="m-1" variant="outline-primary" size="lg" onClick={getValue}>{character}</BootButton>
  );
};

export default Button;
