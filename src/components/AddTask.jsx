import React, { useState } from "react";

const AddTask = () => {
  const [Input, setInput] = useState("");
  const [list, setList] = useState([]);
  // get the inputted value then pass it on the input element with a onchange fucntion
  const getInput = (event) => {
    setInput(event.target.value);
  };


  const btnAddClick = () => {
    setList([...list, Input]);
  };
  return (
    <div className="flex h-screen justify-center items-center bg-black text-white">
      <div>
        <div className="space-x-10">
          <input onChange={getInput} type="text" className="text-black" />
          <button
            onClick={btnAddClick}
            className="px-5 py-3 bg-blue-400 rounded"
          >
            Add task
          </button>
        </div>
        <div>
          {list.map((josh) => {
            return <h1>{josh}</h1>;
          })}
        </div>
      </div>
    </div>
  );
};
export default AddTask;
