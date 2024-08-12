import React from "react";
import "./Searche.css";
import RecipeList from "../../components/recipeList/RecipeList";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("name");
  const { error, isPending, data } = useFetch(`/recipes?title=${query}`);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
