import React from "react";
import { useState } from "react";

const Sample = () => {
  // setting up the useState value to string with no string attach to it
  const [inputValue, setinputValue] = useState("");
  // FUnction
  const handeInputChange = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className="Sample h-screen flex justify-center items-center">
      <input type="text" className="text" onChange={handeInputChange} />
      {inputValue}
    </div>
  );
};

export default Sample;
