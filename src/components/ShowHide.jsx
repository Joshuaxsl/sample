import React, { useState } from "react";

const ShowHide = () => {
  const [showText, setShowText] = useState(true);

  const hideText = () => {
    setShowText(!showText);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <div className="helooqweoqweqw eq">
        <div className="flex justify-center">
          <button type="button" className="" onClick={hideText}>
            Hide
          </button>
        </div>
        <div>{showText && <h1>Helo gago</h1>}</div>
      </div>
    </div>
  );
};

export default ShowHide;
