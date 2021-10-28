import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMeal = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [meal, setMeal] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMeal() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strArea: area,
            strCategory: category,
            strInstructions: instructions,
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
          ]
          const newMeal = {
            name, image, area, category, instructions, ingredients
          }
          setMeal(newMeal);
        } else {
          setMeal(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMeal();
  }, [id]);

  if(loading){
    return <Loading />
  }

  if(!meal) {
    return <h2 className='section-title'>no meal to display</h2>
  }

  const {name, image, area, category, instructions, ingredients} = meal;

  return (
    <section className='section meals-section'>
    <Link to="/" className='btn btn-primary'>
      back home
    </Link>
      <h2 className='section-title'>{name}</h2>
      <div className="meal-food">
        <img src={image} alt={name} />
        <div className='meal-info'>
          <p>
            <span className="meal-data">name :</span>
            {name}
          </p>
          <p>
            <span className="meal-data">Area :</span>
            {area}
          </p>
          <p>
            <span className="meal-data">Category :</span>
            {category}
          </p>
          <p>
            <span className="meal-data">Instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="meal-data">ingredients :</span>
            {ingredients.map((item,index)=> {
              return item? <span key={index}>{item}</span>:null
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMeal;
