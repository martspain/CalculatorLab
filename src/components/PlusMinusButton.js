import React from 'react';
import Button from 'react-bootstrap/Button';

const PlusMinusButton = (props) =>{
    
    const character = props.value;

    const updateState = () =>{
        props.alternate(!props.active);
    }

    return(
        <Button className="m-1" variant={props.active ? "secondary" : "outline-secondary"}
            onClick={updateState}>{character}</Button>
    )
}

export default PlusMinusButton;