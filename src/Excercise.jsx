import React, { useState } from "react";

const Excercise = () => {
  const [counter, setCounter] = useState(0)


  const AddCounter = () =>{
    setCounter(counter + 1)
  }

  const SubCounter = () =>{
    setCounter(counter - 1)
  }

  const zeroCount = () =>[
    setCounter(0)
  ]

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="space-y-10">
        <div>
          <h1 className="bg-black text-white px-5 py-5">{counter}</h1>
        </div>
        <div>
          <button onClick={AddCounter} className="px-5 py-3 bg-black text-white hover:bg-blue-500">
            Increase
          </button>
        </div>
        <div>
          <button onClick={SubCounter} className="px-5 py-3 bg-black text-white hover:bg-blue-500">
            Decrease
          </button>
        </div>
        <div>
          <button onClick={zeroCount} className="px-5 py-3 bg-black text-white hover:bg-blue-500">
            Set to zero
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excercise;
