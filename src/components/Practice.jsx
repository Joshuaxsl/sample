import React, { useState } from "react";

const Practice = () => {

    const [num,setNum] = useState('')
    const [result, setResult] = useState('')

    // Here we get the new value of num from the inputted text
    const handleInputCopy = (event) => {
        setNum(event.target.value)
    }

    // Here we pass the value of num to the result using setter
    const buttonIsClick = () =>{
        const getNum = num
        setResult(`Your height is ${getNum}`)
    }

  return (
    <div className="h-screen bg-blue-600 text-white flex justify-center items-center">
      <input type="text" className="p-5 bg-black text-white" onChange={handleInputCopy} />
      <button type="button" onClick={buttonIsClick}>Ok</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Practice;
