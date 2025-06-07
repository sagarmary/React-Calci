import React, { useState } from 'react';
import './Styles.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const keys = ['7', '8', '9', '+',
                '4', '5', '6', '-',
                '1', '2', '3', '*',
                '0', '.', '/',];

  return (
    <div className="calculator">
      <h1 >Simple Calculator</h1>
      <div className="display">{input || 'Enter Input'}</div>
      <div className="keys">
        {keys.map((key, index) => (
          <button key={index} onClick={() => handleButtonClick(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="actions">
        <button onClick={handleClear} className="clear">Clear</button>
        <button onClick={handleCalculate} className="equal">Calculate</button>
      </div>
    </div>
  );
}

export default Calculator;
