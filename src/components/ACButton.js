import React from 'react';
import Button from 'react-bootstrap/Button';

const ACButton = (props) => {
  const character = props.value;

  const updateState = () => {
    // Se resetean todas las operaciones y valores de la calculadora
    props.update(character);
    props.setFirst(0);
    props.setNegative(false);

    document.getElementById('display').value = '';
  };

  return (
    <Button className="m-1" variant="outline-secondary" size="lg" onClick={updateState}>{character}</Button>
  );
};

export default ACButton;
