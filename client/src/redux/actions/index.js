// Aca deben declarar las variables donde tengan el action types.
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";

// Esten atentos a que los nombres de las variables coincidan.

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk
//
// NOTA:
//      Para obtener la informacion del detalle recorda utilizar la ruta http://localhost:3001/character/:id
//      Usar ruta 'http://localhost:3001/characters' p

export const getCharacters = () => (dispatch) => {
  return fetch(`http://localhost:3001/dogs`)
    .then((r) => r.json())
    .then((json) => {
      dispatch({ type: "GET_DOGS", payload: json });
    });
};

export const getCharacterDetail = (id) => (dispatch) => {
  return fetch(`http://localhost:3001/Dogs/${id}`)
    .then((r) => r.json())
    .then((r) => {
      dispatch({ type: "GET_DOG_DETAIL", payload: r });
    });
};



