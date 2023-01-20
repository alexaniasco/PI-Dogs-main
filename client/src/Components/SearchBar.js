import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({search}) {

const [inputval,setInputval] = useState("")



  


  return (
    <div className="Searchbar_cont">
      <Link to="/">
        <button  className="Home_btn">
          Home
        </button>
      </Link>
      <form className="Search" onSubmit={search}>
        <input name="searchtext"  value={inputval} onChange={(e)=> setInputval(e.target.value)} className="Search_text" placeholder="Buscar Perrito"></input>
        <button type="submit" className="Submit_search_btn">🐶🐾</button>
      </form>
      <p>DOGING</p>
    </div>
  );
  }

export default SearchBar;
