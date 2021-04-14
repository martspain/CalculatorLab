import React from 'react';
import Button from 'react-bootstrap/Button';

const ANSButton = (props) =>{
    const character = props.value;

    const updateState = () =>{
        document.getElementById("display").value = "";
        document.getElementById("display").value = props.answer;
    }

    return(
        <Button className="m-1" variant="outline-secondary" size="lg" onClick={updateState}>{character}</Button>
    )
}

export default ANSButton;