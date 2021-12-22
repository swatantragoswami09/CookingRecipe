import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import "./Search.css";
function Search() {
  const queryString = useLocation().search;
  const qureyParams = new URLSearchParams(queryString);
  const query = qureyParams.get("q");
  const url = "http://localhost:3000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipe including "{query}"" </h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Search;
