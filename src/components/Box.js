import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Box = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Homem: 0,
    Mulher: 0,
    Crianca: 0,
  });

  const handleValueChange = (label, event) => {
    setValues(prevValues => ({ ...prevValues, [label]: Number(event.target.value) }));
  };

  const handleIncrement = (label) => {
    setValues(prevValues => ({ ...prevValues, [label]: prevValues[label] + 1 }));
  };

  const handleDecrement = (label) => {
    setValues(prevValues => ({
      ...prevValues,
      [label]: prevValues[label] > 0 ? prevValues[label] - 1 : 0 }));
  };

  const handleCalculate = () => {
    navigate('/result', { state: { values } });
  };

  return (
    <>
      <div className="row-first">
        {['Homem', 'Mulher', 'Crianca'].map(label => (
          <div className="input-group" key={label}>
            <label htmlFor={label}>{label}</label>
            <input type="number" id={label} name={label} value={values[label]} onChange={(event) => handleValueChange(label, event)} className="input-valid" />
            <div className="button-group">
              <button className="input-group__button--small" onClick={() => handleDecrement(label)}>-</button>
              <button className="input-group__button--small" onClick={() => handleIncrement(label)}>+</button>
            </div>
          </div>
        ))}
      </div>
  
      <div className="row">
        <div>
            <p id="invalid-input" style={{"visibility": "hidden"}}>Por favor, insira somente números!</p>
            <p id="no-input" style={{"visibility": "hidden"}}>Por favor, selecione a quantidade de pessoas!</p>
            <button className="default-button" onClick={handleCalculate}>Calcular</button>
        </div>
      </div>
    </>
  );
};

export default Box;