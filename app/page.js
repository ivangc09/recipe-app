"use client";

import { useState } from "react";
import { getRecipes } from "../utils/api";
import RecipeList from "../components/RecipeList";

export default function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  const handleSearch = async () => {
    const results = await getRecipes(query);
    setRecipes(results);
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="main-container">
      <h1 className="">Recetas 🍽️</h1>
      <div className="recipe-search">
        <input
          type="text"
          placeholder="Buscar receta..."
          className=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="">
          Buscar
        </button>
      </div>
      
      <div className="recipes-container">
        <RecipeList recipes={recipes} onRecipeClick={openModal} />
      </div>

      {/* Modal para mostrar los detalles de la receta */}
      {selectedRecipe && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedRecipe.strMeal}</h2>
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
            <p>{selectedRecipe.strInstructions}</p>
          </div>
        </div>
      )}

      
    </div>
  );
}
