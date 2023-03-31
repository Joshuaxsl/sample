import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // get the input value
  const getInput = (event) => {
    setInput(event.target.value);
  };

  //Get a new set of array when the button is click

  const addNotes = () => {
    setNotes([...notes, input]);
  };

  const removeNote = (mynotes) => {
    setNotes(
      notes.filter((note) => note !== mynotes)
    );
  };

  return (
    <div className="h-screen">
      <div>
        <div className="space-x-10">
          <input type="text" onChange={getInput} />
          <button onClick={addNotes} className="uppercase">
            Add note
          </button>
        </div>
        <div>
          {/* create a new array */}
          {notes.map((note) => {
            return (
              <div>
                <h1>{note}</h1>
                <button onClick={ () => removeNote(note)} className="uppercase">
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
