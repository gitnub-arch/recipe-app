import React, { useEffect, useRef, useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();
  const { postData, data } = useFetch("/recipes", "POST");

  const handleSubmit = async (e) => {
    e.preventDefault();

    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAdd = () => {
    const ing = newIngredients.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredients("");
    ingredientInput.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || (e.altKey && e.key === "Enter")) {
      e.preventDefault();
      handleAdd();
    }
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} action="">
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref={ingredientInput}
              onKeyDown={handleKeyPress}
            />
          </div>
        </label>
        <p>
          Current ingredients: {""}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          ></textarea>
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;