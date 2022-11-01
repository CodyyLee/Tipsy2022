import "./drinkList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DrinkDay from "../drinkDay/DrinkDay";
import uuid from "react-uuid";

export default function DrinkList({ other = null }) {
  const { type } = useParams();
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    if (other !== null) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${other}`
        )
        .then((res) => {
          let temp = res.data.drinks.map((el) => {
            return el;
          });

          setDrinkList(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
        .then((res) => {
          let temp = res.data.drinks.map((el) => {
            return el;
          });

          setDrinkList(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [type, other]);

  return (
    <div className="listOuterContainer">
      <div className="listHeader">
        <h3 className="listTitle">Explore</h3>
      </div>

      <div className="drinksListContainer">
        {drinkList.length > 0
          ? drinkList.map((el, i) => {
              return (
                <div key={uuid()} className="driContainer">
                  <DrinkDay key={uuid()} drinkSent={el} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
