const GetDogs = async () => {
  let url = "http://localhost:3001/dogs";
  const res = await fetch(url);
  const breads = await res.json();
  
  return breads
};

export default GetDogs;
