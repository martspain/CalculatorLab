import React from 'react';
import BootButton from 'react-bootstrap/Button';

const Button = (props) => {
    
    const character = props.value;
    
    const getValue = () =>{
        let screen = document.getElementById("display");
        
        if(screen.value.length < 9){
            screen.value = screen.value + character;
        }
    }

    return(
        <BootButton className="m-1" variant="outline-primary" size="lg" onClick={getValue}>{character}</BootButton>
    )
}

export default Button;