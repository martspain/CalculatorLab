import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from './Button';
import Display from './Display';
import DeleteButton from './DeleteButton';
import DotButton from './DotButton';
import OperButton from './OperButton';
import ACButton from './ACButton';
import PlusMinusButton from './PlusMinusButton';
import ANSButton from './ANSButton';

const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [operation, setOperation] = useState(0);
  const [result, setResult] = useState(0);
  const [negativeHandle, setNegativeHandle] = useState(false);
  const [typing, setTyping] = useState(false);

  const execute = () => {
    if (operation === 0) {
      if (firstValue === 0) {
        try {
          if (!isNaN(parseFloat(document.getElementById('display').value))) {
            setFirstValue(parseFloat(document.getElementById('display').value));
            document.getElementById('display').value = '';
          } else {
            setOperation(0);
            alert('Debe ingresar un número válido.');
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else if (operation === 1) {
      try {
        let newRes = firstValue + parseFloat(document.getElementById('display').value);
        if (!isNaN(newRes)) {
          setResult(newRes);
          setFirstValue(newRes);
          if (newRes < 999999999) {
            document.getElementById('display').value = newRes;
            setTyping(true);
          } else {
            document.getElementById('display').value = 'ERROR';
            alert('El resultado obtenido es mayor al límite de 999,999,999');
          }
        } else {
          alert('Debe ingresar un valor válido.');
        }
      } catch (error) {
        console.log(error);
      }
    } else if (operation === 2) {
      try {
        let newRes = firstValue - parseFloat(document.getElementById('display').value);
        if (!isNaN(newRes)) {
          setResult(newRes);
          setFirstValue(newRes);
          if (newRes < 0) {
            if (negativeHandle) {
              if (newRes >= -999999999) {
                document.getElementById('display').value = newRes;
                setTyping(true);
              } else {
                document.getElementById('display').value = 'ERROR';
                alert('El resultado obtenido es menor que el límite de -999,999,999');
              }
            } else {
              document.getElementById('display').value = 'ERROR';
            }
          } else {
            document.getElementById('display').value = newRes;
            setTyping(true);
          }
        } else {
          alert('Debe ingresar un valor válido.');
        }
      } catch (error) {
        console.log(error);
      }
    } else if (operation === 3) {
      try {
        let newRes = firstValue * parseFloat(document.getElementById('display').value);
        if (!isNaN(newRes)) {
          setResult(newRes);
          setFirstValue(newRes);
          if (newRes < 999999999) {
            if (newRes.toString().length <= 9) {
              document.getElementById('display').value = newRes;
              setTyping(true);
            } else {
              document.getElementById('display').value = newRes.toString().slice(0, 9);
              setTyping(true);
            }
          } else {
            document.getElementById('display').value = 'ERROR';
            alert('El resultado obtenido es mayor al límite de 999,999,999');
          }
        } else {
          alert('Debe ingresar un valor válido.');
        }
      } catch (error) {
        console.log(error);
      }
    } else if (operation === 4) {
      try {
        let newRes = firstValue / parseFloat(document.getElementById('display').value);
        if (!isNaN(newRes)) {
          setResult(newRes);
          setFirstValue(newRes);
          if (newRes.toString().length > 9) {
            document.getElementById('display').value = newRes.toString().slice(0, 9);
            setTyping(true);
          } else {
            document.getElementById('display').value = newRes;
            setTyping(true);
          }
        } else {
          alert('Debe ingresar un valor válido.');
        }
      } catch (error) {
        console.log(error);
      }
    } else if (operation === 5) {
      try {
        let newRes = firstValue % parseFloat(document.getElementById('display').value);
        if (!isNaN(newRes)) {
          setResult(newRes);
          setFirstValue(newRes);
          if (newRes.toString().length > 9) {
            document.getElementById('display').value = newRes.toString().slice(0, 9);
            setTyping(true);
          } else {
            document.getElementById('display').value = newRes;
            setTyping(true);
          }
        } else {
          alert('Debe ingresar un valor válido.');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const oper = (key) => {
    // No hay operacion seleccionada
    let operNumber = 0;

    // Suma
    if (key === '+') {
      operNumber = 1;
    }

    // Resta
    else if (key === '−') {
      operNumber = 2;
    }

    // Multiplicacion
    else if (key === '×') {
      operNumber = 3;
    }

    // Division
    else if (key === '÷') {
      operNumber = 4;
    }

    // Operacion modulo
    else if (key === '%') {
      operNumber = 5;
    }

    setOperation(operNumber);
  };

  return (
    <div className="container" data-testid="calculadoraTest">
      <div className="container">
        <div className="row justify-content-center my-5">
          <Display />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ButtonGroup>
            <ANSButton value="ANS" answer={result} negative={negativeHandle} />
            <PlusMinusButton value="±" active={negativeHandle} alternate={setNegativeHandle} />
            <ACButton value="AC" setFirst={setFirstValue} update={oper} setNegative={setNegativeHandle} />
            <DeleteButton value="←" />
            <OperButton value="%" onTouch={execute} update={oper} />
          </ButtonGroup>
        </div>
        <div className="row">
          <ButtonGroup>
            <Button value={7} flag={typing} setFlag={setTyping} />
            <Button value={8} flag={typing} setFlag={setTyping} />
            <Button value={9} flag={typing} setFlag={setTyping} />
            <OperButton value="÷" onTouch={execute} update={oper} />
          </ButtonGroup>
        </div>
        <div className="row">
          <ButtonGroup>
            <Button value={4} flag={typing} setFlag={setTyping} />
            <Button value={5} flag={typing} setFlag={setTyping} />
            <Button value={6} flag={typing} setFlag={setTyping} />
            <OperButton value="×" onTouch={execute} update={oper} />
          </ButtonGroup>
        </div>
        <div className="row">
          <ButtonGroup>
            <Button value={1} flag={typing} setFlag={setTyping} />
            <Button value={2} flag={typing} setFlag={setTyping} />
            <Button value={3} flag={typing} setFlag={setTyping} />
            <OperButton value="−" onTouch={execute} update={oper} />
          </ButtonGroup>
        </div>
        <div className="row">
          <ButtonGroup>
            <Button value={0} flag={typing} setFlag={setTyping} />
            <DotButton value="." flag={typing} setFlag={setTyping} />
            <OperButton value="=" onTouch={execute} update={oper} />
            <OperButton value="+" onTouch={execute} update={oper} />
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
