import React, { useState } from "react";

const BMI = () => {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [classification, setClassification] = useState("");

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const getResult = () => {
    const heightcalc = Height / 100;
    const heightResult = heightcalc * heightcalc;
    const bmi = Weight / heightResult;
    setResult(bmi.toFixed(2));

    if (bmi < 18.5) {
      setClassification("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setClassification("Normal");
    } else if (bmi >= 25 && bmi < 30) {
      setClassification("Overweight");
    } else {
      setClassification("Obese");
    }
  };

  const clearClick = () => {
    setHeight("");
    setWeight("");
    setResult("");
    setClassification("")
  };
  
  return (
    <div className="h-screen bg-black text-white flex justify-center items-center">
      <div className="space-y-10 ">
        <div className="flex">
          <h1 className="text-5xl">BMI Calculator</h1>
        </div>
        <div>
          {/* Height */}
          <input
            value={Height}
            type="text"
            className="bg-white p-5 text-black w-full"
            placeholder="Input your Height"
            onChange={handleHeight}
          />
        </div>
        <div>
          {/* Weight */}
          <input
            value={Weight}
            type="text"
            className="bg-white p-5 text-black w-full "
            placeholder="Input your Weight"
            onChange={handleWeight}
          />
        </div>
        <div className="space-x-1 flex justify-center items-center">
          <button onClick={getResult} className=" py-3 w-5/12 rounded bg-blue-600">
            Calculate
          </button>
          <button
            onClick={clearClick}
            className=" py-3 rounded bg-blue-600 w-5/12 "
          >
            Clear
          </button>
        </div>
        <div className="space-y-10">
          <h1 className="px-5 py-3 bg-green-500">
            Your Body Mass Index is : {result}
          </h1>
          <h1 className="px-5 py-3 bg-green-500">You are: {classification}</h1>
        </div>
      </div>
    </div>
  );
};

export default BMI;
