import React, { useContext } from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ThemeContext } from "../../context/themeProvider";

const Recipe = () => {
  const { id } = useParams();
  const {error, isPanding, data: recipe } = useFetch("/recipes/" + id)
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPanding && <p className="loading">Loading...</p>}

      
      {recipe && (
        <>
       <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
           {recipe.ingredients?.map((ing) => (
            <li key={ing}>{ing}</li>
           ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
