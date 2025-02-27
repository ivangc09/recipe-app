// components/RecipeList.js

export default function RecipeList({ recipes, onRecipeClick }) {
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-item">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <button 
              onClick={() => onRecipeClick(recipe)}
              className=""
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>
    );
  }
  