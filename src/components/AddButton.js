import React from 'react';
import Button from 'react-bootstrap/Button';

const AddButton = (props) =>{

    const character = props.value;

    const updateState = () =>{
        props.update(props.value);
        props.onTouch();
    }
    /*
    const checkSum = () =>{
        
        let screen = document.getElementById("display");

        
        //Si no se ha presionado otra operación, se añade esta como siguiente operacion
        if(props.operstat === 0){
            try{
                let number = parseFloat(screen.value);  
                props.firstfunc(number);
                props.operfunc(character);
                screen.value = '';
            }
            catch(error){
                console.log(error);
            }
            finally{
                console.log(props.operstat);
            }
        }
        else{
            try{
                let number = parseFloat(screen.value);   
                props.secfunc(number);
                props.operfunc(character);
                //screen.value = '';
            }
            catch(error){
                console.log(error);
            }
            finally{
                let numberTwo = parseFloat(screen.value);
                props.addfunc(props.first + numberTwo);
                console.log(props.first, numberTwo, props.operstat);
                screen.value = (props.first + numberTwo).toString();
            }
        }
        

    }*/

    return(
        <Button id="add-but" className="m-1" variant="outline-primary" size="lg" onClick={updateState}>{character}</Button>
    )
}

export default AddButton;