export default function RecipeList({ recipes, onRecipeClick }) {
    return (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-item aleo-font">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>

              <div className="recipe-lower">

                <button 
                  onClick={() => onRecipeClick(recipe)}
                  className="aleo-font"
                >
                  View Recipe
                </button>
                
                <div className="category-area">
                  <p>{recipe.strCategory}</p>
                  <p>{recipe.strArea}</p>
                </div>
              </div>
              
              
            </div>
          ))}
        </div>
    );
  }
  