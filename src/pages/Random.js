import React from "react";
import Loading from "../components/Loading";
import SingleRandomMeal  from "../components/SingleRandomMeal";
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const Random = () => {
  const [loading, setLoading] = React.useState(false);
  const [showState, setShowState] = React.useState(false);
  const [randomMeal, setRandomMeal] = React.useState([]);

  const randomMealHandler = () => {
      setLoading(true);
      setShowState(true);
    async function getRandomMeal() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        //   console.log(data);
        if (data.meals) {
          const {
            idMeal: id,
            strMeal: name,
            strMealThumb: image,
            strArea: area,
            strCategory: category,
            strInstructions: instructions,
            strSource: source,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.meals[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

        //   console.log(ingredients);
          const newRandomMeal = {
            id,
            name,
            image,
            area,
            category,
            instructions,
            source,
            ingredients,
          };
          setRandomMeal(newRandomMeal);
        //   console.log(randomMeal);
        } 
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getRandomMeal();
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className='meals-section section'><button
        className="btn btn-primary btn-details"
        onClick={randomMealHandler}
      >
        fetch random meal
      </button></div>
     
        {showState && <SingleRandomMeal key={randomMeal.id} {...randomMeal} />}
      
    </div>
  );
};

export default Random;
