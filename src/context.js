import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item) => {
          const { idMeal, strMeal, strMealThumb, strArea, strCategory } = item;
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            area: strArea,
            category: strCategory,
          };
        });
        setMeals(newMeals)
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[searchTerm]);

  useEffect(() => {
    fetchMeals();
  }, [searchTerm, fetchMeals]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        meals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
