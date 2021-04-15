import React from 'react';
import Button from 'react-bootstrap/Button';

const ANSButton = (props) =>{
    const character = props.value;

    const updateState = () =>{
        document.getElementById("display").value = "";
        if(props.answer < 999999999){
            document.getElementById("display").value = props.answer;
        }
        else{
            document.getElementById("display").value = 'ERROR';
            alert('El resultado obtenido es mayor al límite de 999,999,999');
        }
    }

    return(
        <Button className="m-1" variant="outline-secondary" size="lg" onClick={updateState}>{character}</Button>
    )
}

export default ANSButton;