import React from "react";
import * as actions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { DogsDetailsInfo } from "./DogsDetailsInfo";




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
    <div>

<SearchBar></SearchBar>
<h1>no hay nada</h1>
    </div>
   
  )
};

export default CharacterDetail;
