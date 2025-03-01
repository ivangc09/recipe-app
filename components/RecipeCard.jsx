import Link from "next/link";

export default function RecipeCard({ meal }) {
  return (
    <div className="recipe-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="" />
      <h2 className="">{meal.strMeal}</h2>
      <Link href={`/recipe/${meal.idMeal}`}>
        <button className="">
          Ver Receta
        </button>
      </Link>
    </div>
  );
}
