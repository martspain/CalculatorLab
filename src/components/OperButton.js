import React from 'react';
import Button from 'react-bootstrap/Button';

const OperButton = (props) => {
  const character = props.value;

  const updateState = () => {
    props.update(props.value);
    props.onTouch();
  };

  return (
    <Button className="m-1" variant="primary" size="lg" onClick={updateState}>{character}</Button>
  );
};

export default OperButton;
