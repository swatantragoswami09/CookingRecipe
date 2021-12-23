import "./Create.css";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngrident, setNewIngrident] = useState("");
  const [ingredients, setIngridents] = useState([]);
  const history = useHistory();
  const ingredientInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    };
    try {
      await projectFirestore.collection("recipes").add(doc);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngrident.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngridents((prevIngredients) => [...prevIngredients, newIngrident]);
      setNewIngrident("");
    }
    setNewIngrident("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngrident(e.target.value)}
              value={newIngrident}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>
        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  );
}

export default Create;
