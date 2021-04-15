import React from 'react';
import Button from 'react-bootstrap/Button';

const DeleteButton = (props) => {
  const character = props.value;

  const deleteLastChar = () => {
    let display = document.getElementById('display');
    let newtext = display.value.slice(0, display.value.length - 1);
    display.value = newtext;
  };

  return (
    <Button className="m-1" variant="outline-secondary" size="lg" onClick={deleteLastChar}>{character}</Button>
  );
};

export default DeleteButton;
