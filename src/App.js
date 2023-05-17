import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setDisplayValue] = useState("0");
  const [operand, setOperand] = useState(0);
  const [operator, setOperator] = useState(null);
  const [waitingOperand, OperatorTrue] = useState(false);
  const [operations, setOperations] = useState([]);

  const Calculate = (operand1, operand2, operator) => {
    switch(operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return operand2;
    }
  }

  
 function handleClear (){
    setDisplayValue("0");
    setOperator(null);
    OperatorTrue(false);
    setOperand(0);
    setOperations([]);
  }

  const handleSetNumber = (num) => {
    if (waitingOperand) {
      setDisplayValue(String(num));
      OperatorTrue(false);
    } else {
      setDisplayValue(currentValue === "0" ? String(num) : currentValue + num);
    }
  }

  const handleSetOperatorOutput = (op) => {
    const inputValue = parseFloat(currentValue);
    if (operand === 0) {
      setOperand(inputValue);
      OperatorTrue(true);
      setOperator(op);
      setOperations([...operations, inputValue, op]);
    } else {
      const currentValue = operand || 0;
      const newValue = Calculate(currentValue, inputValue, operator);
      setDisplayValue(String(newValue));
      setOperand(newValue);
      OperatorTrue(true);
      setOperator(op);
      setOperations([...operations, inputValue, operator, op]);
    }
  }

  const buttons = [
    { char: 'C', onClick: () => handleClear(), id: "span-three" },
    { char: '/', onClick: () => handleSetOperatorOutput('/') },
    { char: '7', onClick: () => handleSetNumber(7) },
    { char: '8', onClick: () => handleSetNumber(8) },
    { char: '9', onClick: () => handleSetNumber(9) },
    { char: '*', onClick: () => handleSetOperatorOutput('*') },
    { char: '4', onClick: () => handleSetNumber(4) },
    { char: '5', onClick: () => handleSetNumber(5) },
    { char: '6', onClick: () => handleSetNumber(6) },
    { char: '-', onClick: () => handleSetOperatorOutput('-') },
    { char: '1', onClick: () => handleSetNumber(1) },
    { char: '2', onClick: () => handleSetNumber(2) },
    { char: '3', onClick: () => handleSetNumber(3) },
    { char: '+', onClick: () => handleSetOperatorOutput('+') },
    { char: '0', onClick: () => handleSetNumber(0) },
    { char: '.', onClick: () => handleSetNumber(".") },
    { char: '=', onClick: () => handleSetOperatorOutput('='), id: "span-two"},
  ];

  return (
    <div className="App">
      <div class="calculator-layout">
        <div class="outputs">
          <div className="previous-number">{operations.join(" ")}</div>
          <div className="current-number">{currentValue}</div>
        </div>
        {buttons.map((button) => (<button key={button.char} id = {button.id} onClick={button.onClick}>{button.char}</button>))}
      </div>
    </div>
);
}

export default App;


