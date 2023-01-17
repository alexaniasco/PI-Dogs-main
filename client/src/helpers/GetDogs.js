const GetDogs = async () => {
  let url = "https://api.thedogapi.com/v1/breeds?api_key={YOUR_API_KEY}";
  const res = await fetch(url);
  const breads = await res.json();

  return breads
};

export default GetDogs;
