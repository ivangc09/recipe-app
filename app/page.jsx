"use client";

import { useState, useEffect } from "react";
import { getRecipes, getRandomRecipe} from "../utils/api";
import RecipeList from "../components/RecipeList";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";

export default function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const randomRecipes = [];
      for (let i = 0; i < 3; i++) {
        const recipe = await getRandomRecipe();
        randomRecipes.push(recipe);
      }
      setRecipes(randomRecipes);
    };

    fetchRandomRecipes();
  }, []);


  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await getRecipes(query);
    setRecipes(results); 
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const steps = selectedRecipe && selectedRecipe.strInstructions
  ? selectedRecipe.strInstructions.split("\n").filter(step => step.trim() !== "")
  : [];

  return (
    <div className="main-container">
      
      <NavBar />
      <div className="recipe-search">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="aleo-font"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="searchBtn aleo-font">
          <Search />
        </button>
      </div>
      
      <div className="recipes-container">
        <RecipeList recipes={recipes} onRecipeClick={openModal} />
      </div>

      {selectedRecipe && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content aleo-font" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            
            <div className="recipe-name">
              <h2>{selectedRecipe.strMeal}</h2>
              <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
            </div>

            <div className="ingredients-measure">
              <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {Object.keys(selectedRecipe)
                    .filter((key) => key.includes("strIngredient") && selectedRecipe[key])
                    .map((key) => (
                      <li key={key}>{selectedRecipe[key]}</li>
                    ))}
                </ul>
              </div>

              <div className="measure">
                <h3>Measure</h3>
                <ul>
                  {Object.keys(selectedRecipe)
                    .filter((key) => key.includes("strMeasure") && selectedRecipe[key])
                    .map((key) => (
                      <li key={key}>{selectedRecipe[key]}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="instructions">
              <h3>Instructions</h3>
              {steps.map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}
