import React, { useEffect, useState } from "react";

export const Select = () => {
  const [temp, setTemp] = useState();

  useEffect(async () => {
    await fetch("http://localhost:3001/temperaments")
      .then((r) => r.json())
      .then((r) => setTemp(r));
  }, []);

  if (temp)
    return (
      <div>
        <select>
          {" "}
          {temp.map((e) => (
            <option>{e.name}</option>
          ))}
        </select>
        <select name="temp">
          {" "}
          {temp.map((e) => (
            <option>{e.name}</option>
          ))}
        </select>
      </div>
    );
  else return <h1>loading</h1>;
};
