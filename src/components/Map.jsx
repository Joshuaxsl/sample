import React from "react";

const Map = () => {
  const myArray = [1,2,3,4,5]

//   const multiplyNumber = (num) =>{
//     return num*num
//   }

  const multiply = myArray.map((num) => {
    return <h1>{num*num}</h1>
  })

  return (
    <div className="h-screen flex justify-center items-center">
      {multiply}
    </div>
  );
};

export default Map;
