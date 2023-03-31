import React, { useState } from "react";

const HeightCalculator = () => {
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setHeight(event.target.value);
  };

  const handleButtonClick = () => {
    const heightInCm = height;
    setResult(`Your height is ${heightInCm} cm`);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="space-y-10">
        <h1 className="uppercase text-5xl font-bold">Input your height</h1>
        <div className="space-y-10">
          <input
            type="text"
            className="bg-blue-600 text-white p-5 w-full"
            onChange={handleInputChange}
          />
          <button
            onClick={handleButtonClick}
            className="p-5 bg-green-500 rounded text-bold text-3xl text-white"
          >
            Ok
          </button>
          <h1 className="bg-blue-600 text-white p-5 w-full">{result}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeightCalculator;
