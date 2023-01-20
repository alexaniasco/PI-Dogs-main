import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({
  filtrodb,filtroapi
}) {
    
  return (
    <div className="NavBar_cont">
      <div className="NavBar">
        <Link to="/createdog">
          {" "}
          <button className="Btn_nav">Ceate Dog</button>
        </Link>
        
          <button onClick={filtroapi} className="Btn_nav">Api Dogs</button>
      
      
          <button onClick={filtrodb} className="Btn_nav">
            My Dogs
          </button>
        
      </div>
    </div>
  );
}
