import React from "react";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { DogsDetailsInfo } from "./DogsDetailsInfo";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const CharacterDetail = () => {
  
  const dispatch = useDispatch();
  const {id} = useParams()

  React.useEffect(() => {
    dispatch(actions.getCharacterDetail(id))

  }, [dispatch, id])


  const character = useSelector((state) => state.DogDetail);
  
  if (character)return (
    <div>
      <SearchBar></SearchBar>
      <div >
      <DogsDetailsInfo temperamento={character[0]?.temperament} name={character[0]?.name} image={character[0]?.image}  height={character[0]?.height} life_span={character[0]?.life_span} ></DogsDetailsInfo>
      
      </div>
    </div>
  );
  else return(
    <h1>no hay nada</h1>
  )
};

export default CharacterDetail;
