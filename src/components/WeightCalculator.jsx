import React, { useState } from "react";

const WeightCalculator = () => {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  // update the value of weight when the user input something
  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  // get the new value of weight and pass it on the result
  const getWeight = () => {
    //
    setResult(`${weight} kg` );
  };

    const clearButton = () =>{
        setWeight('')
        setResult(0)
    }
  return (
    <div className="h-screen flex items-center justify-center bg-black  font-bold font-mono">
      <div className="space-y-10">
        <div>
          <h1 className="uppercase text-5xl text-white">Weight Calculator</h1>
        </div>
        <div>
          <input type="text" value={weight} placeholder="Input your weight" className="p-5 w-full text-3xl" onChange={handleWeight} />
        </div>
        <div className="space-x-10">
          <button type="" onClick={getWeight} className="text-black p-5 text-3xl bg-white">
            Calculate
          </button>
          <button type="" onClick={clearButton} className="text-black p-5 text-3xl bg-white">
            Clear
          </button>
        </div>
        <div>
          <h1 className=" text-black bg-white p-5 text-3xl">Your weight is: <span className="text-red-600">{result}</span> </h1>
        </div>
      </div>
    </div>
  );
};

export default WeightCalculator;
