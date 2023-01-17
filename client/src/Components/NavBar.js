import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({
  filtro,
}) {
    
  return (
    <div className="NavBar_cont">
      <div className="NavBar">
        <Link to="/createdog">
          {" "}
          <button className="Btn_nav">Ceate Dog</button>
        </Link>
        <Link to="/dogs">
          {" "}
          <button className="Btn_nav">All</button>
        </Link>
        <Link to={"/dogs"}>
          <button className="Btn_nav" onClick={() => filtro()}>
            My Dogs
          </button>
        </Link>
      </div>
    </div>
  );
}
