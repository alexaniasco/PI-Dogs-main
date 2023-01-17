import React, { useState } from "react";
import Title from "./SearchBar";
import "./CreateDogs.css";
import { Select } from "./Select";
import { Link } from "react-router-dom";

export const CreateDogs = () => {
  const [props, setProps] = useState({
    name: "",
    altura: "",
    height: "",
    heightMax:"",
    life_span: "",
    url:""
  });

  const handlechange = (e) => {
    setProps({
      ...props,
      [e.target.name]: e.target.value,
    });

    console.log(props);
  };

  const handleSubmit = ()=>{
    
    fetch("http://localhost:3001/dogs",{
      method:"POST",
      body:JSON.stringify(props),
      headers: {
        'Content-Type': 'application/json'
    
      }
    })}
  

  return (
    <div className="Form_cont">
      <Title></Title>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="Formulario">
            <h1 className="tit">Crea tu perro</h1>
            <input
              name="name"
              value={props.name}
              className="imput"
              placeholder="Nombre"
              onChange={handlechange}
            ></input>
            <input
              name="altura"
              onChange={handlechange}
              value={props.altura}
              type="number"
              className="imput"
              placeholder="Altura"
            ></input>
            <input
              name="height"
              value={props.height}
              type="number"
              className="imput"
              placeholder="Peso"
              onChange={handlechange}
            ></input>
             <input
              name="heightMax"
              value={props.heightMax}
              type="number"
              className="imput"
              placeholder="height max"
              onChange={handlechange}
            ></input>
            <input
              name="life_span"
              value={props.life_span}
              type="number"
              className="imput"
              placeholder="Años de vida"
              onChange={handlechange}
            ></input>
            <input
              name="url"
              value={props.url}
              type="url"
              className="imput"
              placeholder="Url Image"
              onChange={handlechange}
            ></input>
            <div className="selectd">
              <Select></Select>

            </div>
           
           <button className="dogsubmit" type="submit">
              SUBMIT
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};
