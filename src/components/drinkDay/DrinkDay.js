import "./drinkDay.scss";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DrinkDay({ drinkSent }) {
  const navigate = useNavigate();
  const nameRef = useRef();
  const containerRef = useRef();
  const { type } = useParams();

  return (
    <div
      className="dayContainer"
      onClick={() => {
        navigate(`/${type}/${drinkSent.idDrink}`);
      }}
    >
      <div className="dayNameContainer">
        <div
          ref={containerRef}
          className="imageContainer"
          style={
            drinkSent
              ? {
                  backgroundImage: `url(${drinkSent.strDrinkThumb})`
                }
              : null
          }
        ></div>
        {drinkSent ? (
          <h3
            ref={nameRef}
            className="dayName"
            style={{
              fontSize: drinkSent.strDrink.length > 16 ? "1.8em" : "2.5em"
            }}
          >
            {drinkSent.strDrink}
          </h3>
        ) : null}
      </div>
    </div>
  );
}
