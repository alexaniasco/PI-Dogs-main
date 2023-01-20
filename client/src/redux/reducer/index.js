// Importa las action types acá
import {
  GET_DOGS,
  GET_DOG_DETAIL,

} from "../actions/index";
const initialState = {
  Dogs: [],
  DogDetail: {name:1},
  
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return { Dogs: payload };
    case GET_DOG_DETAIL:
      return { ...state, DogDetail: payload};
    default:
      return initialState;
    // Acá va tu código:
  }
};

export default rootReducer;
