import React, { useState } from "react";
import { arrayOfNumbers } from "../types/typesEx3";

function Exercise3() {
  const [numberArray, setNumberArray] = useState<number[]>(arrayOfNumbers);

  const addString = () => {
    setNumberArray([...arrayOfNumbers, "NUMBERS"]);
  };
  return (
    <div>
      <h1>Exercise 3: Arrays and Generics</h1>
      <div>
        {arrayOfNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </div>
      <button onClick={addString}>Try to add a string</button>
    </div>
  );
}

export default Exercise3;
