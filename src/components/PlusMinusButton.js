import React from 'react';
import Button from 'react-bootstrap/Button';

const PlusMinusButton = (props) => {
  const character = props.value;

  const updateState = () => {
    props.alternate(!props.active);

    screen = document.getElementById('display');

    if (screen.value !== '') {
      try {
        screen.value = parseFloat(screen.value) * (-1);
      }
      catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Button className="m-1" variant={props.active ? 'secondary' : 'outline-secondary'} onClick={updateState}>{character}</Button>
  );
};

export default PlusMinusButton;
