import React, {useState} from 'react';
import Button from './Button';
import Display from './Display';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DeleteButton from './DeleteButton';
import DotButton from './DotButton';
import AddButton from './AddButton';
import { readyException } from 'jquery';

const Calculator = () =>{

    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [operation, setOperation] = useState(0);
    const [result, setResult] = useState(0);
    const [negativeHandle, setNegativeHandle] = useState(false);

    const setFirst = (firstNumber) =>{
        setFirstValue(firstNumber);
        console.log(firstValue);
    }

    const setSecond = (secondNumber) =>{
        setSecondValue(secondNumber);
    }

    const sum = () =>{
        setResult(firstValue + secondValue);
        updateDisplay();
    }

    const sub = () =>{
        setResult(firstValue - secondValue);
    }

    const divide = () =>{
        setResult(firstValue / secondValue);
    }

    const mul = () =>{
        setResult(firstValue * secondValue);
    }

    const updateDisplay = () =>{
        document.getElementById("display").value = result;
        console.log(result);
    }

    const execute = () =>{
        if(operation === 0){
            console.log(`No se realizó ninguna operación sobre ${firstValue} y ${secondValue}`);
            if(firstValue === 0){
                try{
                    setFirstValue(parseFloat(document.getElementById("display").value));
                    document.getElementById("display").value = "";
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
            }
            catch(error){
                console.log(error);
            }
        }
        else if(operation === 2){
            console.log(`Se realiza la resta sobre ${firstValue} y ${secondValue}`);
        }
        else if(operation === 3){
            console.log(`Se realiza la multiplicacion sobre ${firstValue} y ${secondValue}`);
        }
        else if(operation === 4){
            console.log(`Se realiza la division sobre ${firstValue} y ${secondValue}`);
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
                        <Button value={'ANS'} />
                        <Button value={"±"} />
                        <Button value={"AC"} />
                        <DeleteButton value={'←'}/>
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={7}/>
                        <Button value={8}/>
                        <Button value={9}/>
                        <Button value={'÷'} />
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={4}/>
                        <Button value={5}/>
                        <Button value={6}/>
                        <Button value={'×'}/>
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={1}/>
                        <Button value={2}/>
                        <Button value={3}/>
                        <Button value={'−'}/>
                    </ButtonGroup>
                </div>
                <div className="row">
                    <ButtonGroup>
                        <Button value={0}/>
                        <DotButton value={"."} />
                        <Button value={'='} />
                        <AddButton value={'+'} onTouch={execute} update={oper}/>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Calculator;