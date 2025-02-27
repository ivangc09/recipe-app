// pages/recipe/[id].js
export async function getServerSideProps(context) {
  const { id } = context.params;  // Obtener el 'id' de la URL
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();

  // Verificar si hay datos y devolverlos
  if (!data.meals) {
    return {
      notFound: true, // Esto muestra una página 404 si no se encuentra la receta
    };
  }

  return {
    props: {
      recipe: data.meals[0], // Pasar la receta encontrada a la página
    },
  };
}

export default function RecipeDetail({ recipe }) {
  if (!recipe) {
    return <h1>Receta no encontrada</h1>;
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
