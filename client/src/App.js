import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";
import { Paginacion } from "./Components/Paginacion";
import GetDogs from "./helpers/GetDogs";
import * as actions from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "./Components/Select";

// ------------------------------------------

const itemsperpage = 8;

function App() {
  const dispatch = useDispatch();
  const [td, setTd] = useState();
  const [items, setItems] = useState([]);
  const [npage, setNpage] = useState(1);
  const [temp, setTemp] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const perros = useSelector((state) => state.Dogs);
  const todos = [];

  useEffect(() => {
    setLoading(true);
    dispatch(actions.getCharacters());
    todos.push(perros);

    GetDogs().then((r) => {
      setItems(r.splice(0, itemsperpage));
    });
    GetDogs().then((r) => setTd(r));

    fetch("http://localhost:3001/temperaments")
      .then((r) => r.json())
      .then((r) => setTemp(r));

    setLoading(false);
  }, []);

  const nexthandler = () => {
    const nextpage = npage + 1;
    const firstindex = npage * itemsperpage;
    if (firstindex > td.length) {
      return;
    }
    setItems([...td].splice(firstindex, itemsperpage));
    setNpage(nextpage);
  };

  const prevhandler = () => {
    const prevpage = npage - 1;
    if (prevpage < 0) {
      return;
    }
    const firstindex = prevpage * itemsperpage;
    setItems([...td].splice(firstindex, itemsperpage));
    setNpage(prevpage);
  };
  const filtroDb = () => {
    const todos = td;
    const result = [];
    const filtrado = todos.map(function (e) {
      if (typeof e.id !== "number") {
        result.push(e);
      } else console.log("nose");
    });
    setItems([...result]);
  };
  const filtroapi = () => {
    const todos = td;
    const result = [];
    const filtrado = todos.map(function (e) {
      if (typeof e.id === "number") {
        result.push(e);
      } else console.log("nose");
    });
    setItems([...result]);
  };

  const search = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:3001/dogs");
    const res = await data.json();
    const result = await e.target[0].value.toLowerCase();
    const filtro = await res.filter((e) => e.name.toLowerCase() == result);
    console.log(filtro);
    if (filtro.length === 0) {
      setError("no hay perros que mostrar");
      setTimeout(function(){
        setError("")
      },3000)
    } else return setItems(filtro);
  };

  const filterabc = (e) => {
    const filtrado = items;
    filtrado.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return setItems([...filtrado]);
  };

  const filterabcrevez = (e) => {
    const filtrado = items;
    filtrado.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    return setItems([...filtrado]);
  };

  const Filtrados = (value) => {
    if (value == "A-Z") {
      return filterabc();
    }
    if (value == "Z-A") {
      return filterabcrevez();
    }
    return console.log("no salio");
  };

  const filtropeso = (value) => {
    const todos = items;
    const todos2 = items;
    const resto = [];
    if (value === "MaxHeight") {
      const filtrado = todos.map(function (e) {
        if (e.height) {
          todos2.sort(function (a, b) {
            if (a.height > b.maxheight) {
              return -1;
            }
            if (a.height < b.maxheight) {
              return 1;
            }
            return 0;
          });
        }
      });
      setItems([...todos2]);
    } else if (value === "MinHeight") {
      const filtrado = todos.map(function (e) {
        if (e.height) {
          todos2.sort(function (a, b) {
            if (a.height > b.maxheight) {
              return 1;
            }
            if (a.height < b.maxheight) {
              return -1;
            }
            return 0;
          });
        }
      });
      setItems([...todos2]);
    }
  };

  const tempfiltro = (value) => {
    const filtro = td;
    const todos = [];
    const filtrados = filtro.map(function (e) {
      const temp = e.temperament;
      const incluye = temp?.includes(value);
      if (incluye) {
        todos.push(e);
      } else return;
    });

    return setItems(todos);
  };

  const filtroaltura = (value) => {
    const todos = items;
    const todos2 = items;
    const resto = [];
    if (value === "MaxWeight") {
      const filtrado = todos.map(function (e) {
        if (e.weight && e.maxweight) {
          todos2.sort(function (a, b) {
            if (a.maxweight > b.maxweight) {
              return -1;
            }
            if (a.maxweight < b.maxweight) {
              return 1;
            }
            return 0;
          });
        }
      });
      setItems([...todos2]);
    } else if (value === "MinWeight") {
      const filtrado = todos.map(function (e) {
        if (e.weight) {
          todos2.sort(function (a, b) {
            if (a.weight > b.maxweight) {
              return 1;
            }
            if (a.weight < b.maxweight) {
              return -1;
            }
            return 0;
          });
        }
      });
      setItems([...todos2]);
    }
  };

  // -----------------------------------------
  return (
    <div className="App">
      <SearchBar search={search}></SearchBar>
      {error.length > 1 && <p className="error">{error}</p>}
      <div className="App_cont">
        <div className="App_filtros">
          <select onChange={(e) => tempfiltro(e.target.value)}>
            {temp &&
              temp.map((e, index) => (
                <option key={index} value={e.name}>
                  {e.name}
                </option>
              ))}
          </select>
          <select
            onChange={(e) => {
              Filtrados(e.target.value);
            }}
          >
            valores
            <option value={"A-Z"}>A-Z</option>
            <option value={"Z-A"}>Z-A</option>
          </select>

          <select
            onChange={(e) => {
              filtropeso(e.target.value);
            }}
          >
            <option value={"MinHeight"}>MinHeight</option>
            <option value={"MaxHeight"}>MaxHeight</option>
          </select>
          <select
            onChange={(e) => {
              filtroaltura(e.target.value);
            }}
          >
            <option>MinWeight</option>
            <option>MaxWeight</option>
          </select>
        </div>
        <Paginacion
          prevhandler={prevhandler}
          nexthandler={nexthandler}
        ></Paginacion>
        <div className="Dogs_cont">
          {items &&
            items.map((e) => (
              <Card
                id={e.id}
                key={e.id}
                name={e.name}
                temperament={e.temperament}
                height={e.height}
                maxheight={e.maxheight}
                weight={e.weight}
                maxweight={e.maxweight}
                life_span={e.life_span}
                altura={e.altura}
                image={e.image}
                className="Dogs_card"
                loading={loading}
              ></Card>
            ))}
        </div>
      </div>

      <NavBar filtrodb={filtroDb} filtroapi={filtroapi}></NavBar>
    </div>
  );
}

export default App;
