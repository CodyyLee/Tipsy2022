import { useParams } from "react-router-dom";
import DrinkDay from "../../components/drinkDay/DrinkDay";
import DrinkList from "../../components/drinkList/DrinkList";
import "./typePage.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context";
import axios from "axios";
import uuid from "react-uuid";

export default function TypePage() {
  const { type } = useParams();
  const { store, setStore } = useContext(AppContext);
  const [drinks, setDrinks] = useState(null);
  const [drink, setDrink] = useState();
  const [other, setOther] = useState(null);
  const titleRef = useRef();

  useEffect(() => {
    let random;

    if (type === "Alcoholic" || type === "Non-Alcoholic") {
      let param;

      if (type === "Alcoholic") {
        param = "alcoholic";
      } else {
        param = "non_alcoholic";
      }
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${param}`
        )
        .then((res) => {
          setDrinks(res.data.drinks);
          random = Math.floor(Math.random() * res.data.drinks.length);
          setDrink(res.data.drinks[random]);
          setOther(param);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
        .then((res) => {
          setDrinks(res.data.drinks);
          random = Math.floor(Math.random() * res.data.drinks.length);
          setDrink(res.data.drinks[random]);
          setOther(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setStore({ ...store, type: type });
    };
  }, [type]);

  return (
    <div className="pageContainer">
      <header className="pageHeader">
        <div className="titleContainer">
          {type === "Non-Alcoholic" || type === "Alcoholic" ? (
            <h3 ref={titleRef} className="title" style={{ fontSize: "3em" }}>
              {type}
            </h3>
          ) : (
            <h3 ref={titleRef} className="title">
              {type}
            </h3>
          )}
        </div>
      </header>

      {store.search.length > 0 ? (
        <>
          {drinks !== null
            ? drinks.map((el) => {
                if (
                  el.strDrink.toLowerCase().includes(store.search.toLowerCase())
                ) {
                  return (
                    <div
                      key={uuid()}
                      id="searched"
                      className="dayDrinkContainer"
                    >
                      <DrinkDay key={uuid()} type={type} drinkSent={el} />
                    </div>
                  );
                }
              })
            : null}
        </>
      ) : (
        <>
          <div className="dayDrinkContainer">
            <h3 className="dayDrink"> Drink of the day</h3>
            <DrinkDay drinkSent={drink} />
          </div>

          {other !== null ? <DrinkList other={other} /> : <DrinkList />}
        </>
      )}
    </div>
  );
}
