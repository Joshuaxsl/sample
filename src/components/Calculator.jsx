import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const numberClick = (number) =>{
    setInput(input + number)
  }

  const operatorClick = (operator) =>{
    setInput(input + operator)
  }

  const clearClick = () =>{
    setInput('')
    setResult(0)
  }

  const computeClick = () =>{
    setResult(eval(input))
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 gap-5">
        <h1 className="col-span-4 text-right bg-green-800 p-5 text-white">{input}</h1>
        <h1 className="col-span-4 text-right bg-green-800 p-5 text-white">{result }</h1>
        <button onClick={() => numberClick('1')} className="p-5 bg-black text-white">1</button>
        <button onClick={() => numberClick('2')} className="p-5 bg-black text-white">2</button>
        <button onClick={() => numberClick('3')} className="p-5 bg-black text-white">3</button>
        <button onClick={() => operatorClick('+')} className="p-5 bg-black text-white">+</button>
        <button onClick={() => numberClick('4')} className="p-5 bg-black text-white">4</button>
        <button onClick={() => numberClick('5')} className="p-5 bg-black text-white">5</button>
        <button onClick={() => numberClick('6')} className="p-5 bg-black text-white">6</button>
        <button onClick={() => operatorClick('-')} className="p-5 bg-black text-white">-</button>
        <button onClick={() => numberClick('7')} className="p-5 bg-black text-white">7</button>
        <button onClick={() => numberClick('8')} className="p-5 bg-black text-white">8</button>
        <button onClick={() => numberClick('9')} className="p-5 bg-black text-white">9</button>
        <button onClick={() => operatorClick('*')} className="p-5 bg-black text-white">*</button>
        <button onClick={() => numberClick('0')} className="p-5 bg-black text-white">0</button>
        <button onClick={clearClick} className="p-5 bg-black text-white">Clear</button>
        <button onClick={computeClick} className="p-5 bg-black text-white">=</button>
        <button onClick={() => operatorClick('/')} className="p-5 bg-black text-white">/</button>
      </div>
    </div>
  );
};

export default Calculator;
