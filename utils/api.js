const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const getRecipes = async (query) => {
    const res = await fetch(`${API_URL}${query}`);
    const data = await res.json();
    return data.meals || [];
};
