import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({ image, name, temperament, height, life_span ,id}) {
  return (
    <div className="Dog">
      <div className="parteB">
        <img src={image} className="Dog_img"></img>
        <div className="Dog_name">
          <div>{name}</div>
        </div>
      </div>
      <div className="parteA">
      <Link to={`/${id}`}> CLICK</Link>
        <div>
          <div>{temperament}</div>
          <div>{height}</div>
          <div>{life_span}</div>
        </div>
      </div>
    </div>
  );
}
