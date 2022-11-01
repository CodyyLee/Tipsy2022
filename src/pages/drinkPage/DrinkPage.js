import "./drinkPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";

export default function DrinkPage() {
  const [drink, setDrink] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!drink) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          let ingre = Object.keys(res.data.drinks[0]).filter((el) => {
            return el.includes("Ingredient") && res.data.drinks[0][el];
          });

          let meas = Object.keys(res.data.drinks[0]).filter((el) => {
            return el.includes("Measure") && res.data.drinks[0][el];
          });

          setDrink(res.data.drinks[0]);
          setIngredients(ingre);
          setMeasure(meas);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, drink]);

  return (
    <div className="pageContainer">
      <header className="drinkHeader">
        {drink ? (
          <>
            <div className="drinkImageContainer">
              <div className="imageOverlay"></div>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="drinkImage"
              />
            </div>

            <div className="drinkNameContainer">
              <h1
                className="drinkName"
                style={{
                  fontSize: drink.strDrink.length > 16 ? "2em" : "2.5em"
                }}
              >
                {drink.strDrink}
              </h1>
            </div>
          </>
        ) : null}
      </header>

      <div className="contentContainer">
        {drink ? (
          <>
            <div className="ingredientContainer">
              <div className="ingredientTitleContainer">
                <h3 className="ingredientTitle">Ingredients</h3>
              </div>

              <div className="ingredientList">
                {ingredients.map((el, i) => {
                  return (
                    <>
                      <div key={uuid()} className="ingredient">
                        <p key={uuid()} className="ingredientName">
                          {drink[el]}
                        </p>
                        {measure[i] ? (
                          <p key={uuid()} className="measurement">
                            {drink[measure[i]]}
                          </p>
                        ) : (
                          <p key={uuid()} className="measurement">
                            {" "}
                            -{" "}
                          </p>
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="instructionsContainer">
              <p className="instructions">{drink.strInstructions}</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
