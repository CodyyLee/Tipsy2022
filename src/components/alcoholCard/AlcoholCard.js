import { Link } from "react-router-dom";
import "./alcoholCard.scss";

export default function alcoholCard({ type }) {
  return (
    <div className="alcoholContainer">
      <div className="nameContainer">
        <h3 className="name">
          <Link className="linkTag" to={`${type}`}>
            {type}
          </Link>
        </h3>
      </div>
    </div>
  );
}
