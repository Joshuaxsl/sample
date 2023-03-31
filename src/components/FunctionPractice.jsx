import React, { useState } from "react";

const FunctionPractice = () => {
    // Initial value of name is Josh
    const [name,setName] = useState('Josh')
    // 
    const myName = (callName) => {
        callName()
    }
    const callName = () =>{
        setName('Joshua Santos')
    }


    

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
        {/* This is josh in first wihtout execution */}
        <h1>{name}</h1>
        {/* This call the function myname(funtion) which we use arrow function to pass the arguments*/}
        <button onClick={() =>{myName(callName)}}>qweqw</button>
    </div>
  );
};

export default FunctionPractice;
