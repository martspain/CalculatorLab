import React, {useState} from 'react';
import Button from './Button';
import Display from './Display';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DeleteButton from './DeleteButton';
import DotButton from './DotButton';
import OperButton from './OperButton';
import ACButton from './ACButton';
import PlusMinusButton from './PlusMinusButton';
import ANSButton from './ANSButton';

const Calculator = () =>{

    const [firstValue, setFirstValue] = useState(0);
    const [operation, setOperation] = useState(0);
    const [result, setResult] = useState(0);
    const [negativeHandle, setNegativeHandle] = useState(false);

    const execute = () =>{
        if(operation === 0){
            if(firstValue === 0){
                try{
                    if(!isNaN(parseFloat(document.getElementById("display").value))){
                        setFirstValue(parseFloat(document.getElementById("display").value));
                        document.getElementById("display").value = "";
                    }
                    else{
                        setOperation(0);
                        alert('Debe ingresar un número válido.');
                    }
                }
                catch(error){
                    console.log(error);
                }
            }

        }
        else if(operation === 1){
            try{
                console.log(`Se realiza la suma sobre ${firstValue} y ${document.getElementById("display").value}`);
                let newRes = firstValue + parseFloat(document.getElementById("display").value);
                if(!isNaN(newRes)){
                    setResult(newRes);
                    setFirstValue(newRes);
                    document.getElementById("display").value = newRes;
                }
                else{
                    alert('Debe ingresar un valor válido.');
                }
            }
            catch(error){
                console.log(error);
            }
        }
        else if(operation === 2){
            try{
                console.log(`Se realiza la resta sobre ${firstValue} y ${document.getElementById("display").value}`);
                let newRes = firstValue - parseFloat(document.getElementById("display").value);
                if(!isNaN(newRes)){
                    setResult(newRes);
                    setFirstValue(newRes);
                    if(newRes < 0){
                        if(negativeHandle){
                            document.getElementById("display").value = newRes;
                        }
                        else{
                            document.getElementById("display").value = 'ERROR';
                        }
                    }
                    else{
                        document.getElementById("display").value = newRes;
                    }
                }
                else{
                    alert('Debe ingresar un valor válido.');
                }
            }
            catch(error){
                console.log(error);
            }
        }
        else if(operation === 3){
            try{
                console.log(`Se realiza la multiplicacion sobre ${firstValue} y ${document.getElementById("display").value}`);
                let newRes = firstValue * parseFloat(document.getElementById("display").value);
                if(!isNaN(newRes)){
                    setResult(newRes);
                    setFirstValue(newRes);
                    document.getElementById("display").value = newRes;
                }
                else{
                    alert('Debe ingresar un valor válido.');
                }
            }
            catch(error){
                console.log(error);
            }
        }
        else if(operation === 4){
            try{
                console.log(`Se realiza la división sobre ${firstValue} y ${document.getElementById("display").value}`);
                let newRes = firstValue / parseFloat(document.getElementById("display").value);
                if(!isNaN(newRes)){
                    setResult(newRes);
                    setFirstValue(newRes);
                    document.getElementById("display").value = newRes;
                }
                else{
                    alert('Debe ingresar un valor válido.');
                }
            }
            catch(error){
                console.log(error);
            }
        }
    }

    const oper = (key) =>{
        //No hay operacion seleccionada
        let operNumber = 0;

        //Suma
        if(key === "+"){
            operNumber = 1;
        }

        //Resta
        else if(key === "−"){
            operNumber = 2;
        }

        //Multiplicacion
        else if(key === "×"){
            operNumber = 3;
        }

        //Division
        else if(key === "÷"){
            operNumber = 4;
        }

        setOperation(operNumber);
    }

    return(
        <div className="container">
            <div className="container">
                <div className="row justify-content-center my-5">
                    <Display />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <ButtonGroup>
                        <ANSButton value={'ANS'} answer={result} />
                        <PlusMinusButton value={"±"} active={negativeHandle} alternate={setNegativeHandle} />
                        <ACButton value={"AC"} setFirst={setFirstValue} update={oper} setNegative={setNegativeHandle} />
                        <DeleteButton value={'←'}/>
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={7}/>
                        <Button value={8}/>
                        <Button value={9}/>
                        <OperButton value={'÷'} onTouch={execute} update={oper} />
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={4}/>
                        <Button value={5}/>
                        <Button value={6}/>
                        <OperButton value={'×'} onTouch={execute} update={oper} />
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={1}/>
                        <Button value={2}/>
                        <Button value={3}/>
                        <OperButton value={'−'} onTouch={execute} update={oper} />
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={0}/>
                        <DotButton value={"."} />
                        <OperButton value={'='} onTouch={execute} update={oper}/>
                        <OperButton value={'+'} onTouch={execute} update={oper}/>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Calculator;