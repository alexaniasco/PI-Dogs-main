import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";
import { Paginacion } from "./Components/Paginacion";
// ------------------------------------------

const itemsperpage = 8;
let dogs = [];

function App() {
  const [estado, actEstado] = useState([{}]);
  const [npage, setNpage] = useState(1);
  const [items, setItems] = useState([...dogs].splice(0, itemsperpage));

  useEffect(() => {
    fetch("http://localhost:3001/dogs")
      .then((r) => r.json())
      .then((r) => actEstado(r.r));

    fetch("http://localhost:3001/dogs")
      .then((r) => r.json())
      .then((r) => dogs.push(r.r));

    fetch("http://localhost:3001/dogs")
      .then((r) => r.json())
      .then((r) => setItems(dogs[0].splice(0, itemsperpage)));

    console.log(dogs);
  }, []);

  const nexthandler = () => {
    const nextpage = npage + 1;
    const firstindex = npage * itemsperpage;
    if (firstindex === 176) {
      return;
    }
    setItems([...estado].splice(firstindex, itemsperpage));
    setNpage(nextpage);
    console.log(firstindex);
  };

  const prevhandler = () => {
    const prevpage = npage - 1;
    if (prevpage < 0) {
      return;
    }
    const firstindex = prevpage * itemsperpage;
    setItems([...estado].splice(firstindex, itemsperpage));
    setNpage(prevpage);
  };
  const filtroDb = async () => {
    const result = [];
    const data = await fetch("http://localhost:3001/dogs");
    const res = await data.json();
    return setItems(res.r);
  };

  const filtro = async () => {
    const result = [];
    const data = await fetch("http://localhost:3001/dogs");
    const res = await data.json();
    return setItems(res.dogsDb);
  };

  const refresh = async () => {
    const result = [];
    const data = await fetch("http://localhost:3001/dogs");
    const res = await data.json();
    return setItems(dogs[0].splice(0, itemsperpage));
  };

  const search = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:3001/dogs");
    const res = await data.json();
    
    const result = await e.target[0].value;
    const filtro = await res.r.filter(e => e.name == result);
    console.log(filtro)
    if(filtro.length === 0){
      return console.log("no hay perros que mostrar")

    }
    else return  setItems(filtro);
  };

  // -----------------------------------------
  return (
    <div className="App">
      <SearchBar refresh={refresh} search={search} ></SearchBar>
      <div className="App_cont">
        
       <div className="App_filtros">
       <button>A-z</button>
        <button>temperaments</button>
        <button>Height</button>
       </div>
        <div className="Dogs_cont">
          {items.map((e) => (
            <Card
              id={e.id}
              key={e.id}
              name={e.name}
              temperament={e.temperament}
              height={e.height}
              life_span={e.life_span}
              altura={e.altura}
              image={e.image}
              className="Dogs_card"
            ></Card>
          ))}
        </div>
      </div>
      <Paginacion
        prevhandler={prevhandler}
        nexthandler={nexthandler}
      ></Paginacion>
      <NavBar filtroDb={filtroDb} filtro={filtro}></NavBar>
    </div>
  );
}

export default App;
