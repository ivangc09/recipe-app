const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const getRecipes = async (query) => {
    const res = await fetch(`${API_URL}${query}`);
    const data = await res.json();
    return data.meals || [];
};

export const getRandomRecipe = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  };
  