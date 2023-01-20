import React, { useEffect, useState } from "react";

export const Select = () => {
  const [temp, setTemp] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:3001/temperaments")
      .then((r) => r.json())
      .then((r) => setTemp(r));
  }, []);

  
    return (
      <div>
        <select>
          {" "}
          {temp.map((e) => (
            <option>{e.name}</option>
          ))}
        </select>
      
      </div>
    );
 
};
