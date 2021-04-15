import React from 'react';
import Button from 'react-bootstrap/Button';

const DotButton = (props) => {
  const character = props.value;

  const checkDot = () => {
    let screen = document.getElementById('display');

    if (props.flag) {
      screen.value = '';
      props.setFlag(false);
    }

    if (screen.value.indexOf('.') < 0) {
      screen.value += character;
    }
    else {
      alert('Solamente puede ingresar un punto decimal...');
    }
  };

  return (
    <Button className="m-1" variant="outline-primary" size="lg" onClick={checkDot}>{character}</Button>
  );
};

export default DotButton;
