import React, { useState, useEffect } from "react";
import Card from "./Card";
import Title from "./SearchBar";
import NavBar from "./NavBar";

function Totaldogs() {
  const [totalDogs, setTotaldogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/dogs")
      .then((r) => r.json())
      .then((r) => setTotaldogs(r));
  }, []);

  if (totalDogs)
    return (
      <div>
        <Title></Title>
        <div className="App_cont">
          <div className="Dogs_cont">
            {totalDogs.map((e) => (
              <Card
              id={e.Id}
                key={e.razaId}
                name={e.name}
                height={e.height +" - " + e.heightMax + " Kg"}
                
                life_span={e.life_span + " Years"}
                altura={e.altura}
                image={e.url}
                className="Dogs_card"
              ></Card>
            ))}
           
          </div>
        </div>
    <NavBar></NavBar>
      </div>
    );
  else
    return (
      <div>
        <Title></Title>
     
      </div>
    );
}

export default Totaldogs;
