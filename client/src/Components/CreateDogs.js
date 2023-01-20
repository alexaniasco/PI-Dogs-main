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
    heightMax: "",
    life_span: "",
    url: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    setProps({
      ...props,
      [e.target.name]: e.target.value,
    });

    console.log(props);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
      fetch("http://localhost:3001/dogs", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="Form_cont">
      <Title></Title>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="Formulario">
            <h1 className="tit">Crea tu perro</h1>
            <input
              autoComplete="off"
              maxLength="25"
              name="name"
              value={props.name}
              className="imput"
              placeholder="Name"
              onChange={handlechange}
            ></input>
            {errors.nombre && <p>{errors.nombre}</p>}
            <input
              autoComplete="off"
              name="altura"
              value={props.altura}
              maxLength="3"
              className="imput"
              placeholder="Height"
              onChange={handlechange}
            ></input>
            {errors.nombre && <p>{errors.nombre}</p>}
            <input
              autoComplete="off"
              name="height"
              maxLength="2"
              value={props.height}
              className="imput"
              placeholder="Weight"
              onChange={handlechange}
            ></input>
            {errors.nombre && <p>{errors.nombre}</p>}
            <input
              autoComplete="off"
              maxLength="2"
              name="heightMax"
              value={props.heightMax}
              className="imput"
              placeholder="Weight Max"
              onChange={handlechange}
            ></input>
            {errors.nombre && <p>{errors.nombre}</p>}
            <input
              autoComplete="off"
              name="life_span"
              value={props.life_span}
              type="number"
              className="imput"
              placeholder="Life Span"
              onChange={handlechange}
            ></input>
            {errors.nombre && <p>{errors.nombre}</p>}
            <input
              name="url"
              value={props.url}
              type="url"
              className="imput"
              placeholder="Url Image"
              onChange={handlechange}
            ></input>
            {errors.nombre && <p>{errors.nombre}</p>}
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
