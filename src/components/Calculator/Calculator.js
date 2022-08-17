import React, { useState } from 'react';
import './Calculator.css';
import Button from '../Button/Button';

const Calculator = () => {
  let [number, setNumber] = useState("0")
  let [number1, setNumber1] = useState("0")
  let [sum, setSum] = useState("0")

  return (
    <div className="container  text-center ">

      <div className="d-flex justify-content-md-center mt-3">
        <input className="m-2" type="text" onChange={(e) => setNumber(e.target.value)}></input>
        <input className="m-2" type="text" onChange={(e) => setNumber1(e.target.value)}></input>
      </div>
      <div className="mt-5">
        <div className="d-flex justify-content-md-center m-3">
          <Button

            first={number}
            second={number1}
            text={"+"}
            operator={"+"}
            setSum={setSum}
          />
          <Button
            first={number}
            second={number1}
            text={"-"}
            operator={"-"}
            setSum={setSum}
          />
        </div>
        <div className="d-flex justify-content-md-center m-3">
          <Button
            first={number}  
            second={number1}
            text={"*"}
            operator={"*"}
            setSum={setSum}
          />
          <Button
            first={number}
            second={number1}
            text={"/"}
            operator={"/"}
            setSum={setSum}
          />
        </div>
        <p className="m-4 fs-3 "> Result: {sum} </p>
      </div>
    </div>)
}
    
export default Calculator;