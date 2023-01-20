import { Link } from "react-router-dom";
import "./Card.css"

export default function Card({ image, name, temperament, height,maxheight,weight,maxweight, life_span ,id,loading}) {

  if(loading) return <h1>loading</h1>
  return (
    <div className="Dog">
      <div className="parteB">
        <img src={image} className="Dog_img"></img>
        <div className="Dog_name">
          <div>{name}</div>
        </div>
      </div>
      <div className="parteA">
      <Link to={`/${id}`} className="temps temps_link"> Detalles</Link>
        <div className="temps_cont">
          <div className="temps">{temperament + ", "}</div>
          <div className="temps">height: {height + " - " + maxheight}</div>
          <div className="temps">weight: {weight + " - " + maxweight}</div>
          <div className="temps">{life_span}</div>
        </div>
      </div>
    </div>
  );
}
