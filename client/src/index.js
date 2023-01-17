import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Totaldogs from "./Components/Totaldogs";
import { CreateDogs } from "./Components/CreateDogs";
import { MisDogs } from "./Components/MisDogs";
import { Provider } from 'react-redux';
import store from './redux/store';
import CharacterDetail from "./Components/DogDetail";
import NavBar from "./Components/NavBar";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/dogs">
          <Totaldogs />
        </Route>
        <Route exact path="/createdog">
          <CreateDogs />
        </Route>
        <Route path="/:id"><CharacterDetail ></CharacterDetail></Route>
        <Route exact path="/misdogs">
          <MisDogs/>
        </Route>
      </Switch>
      
      
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


