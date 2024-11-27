import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(savedRecipes);
  }, []);

  const filterRecipes = (type) => {
    return recipes.filter((recipe) => recipe.type === type);
  };

  // Function to delete a recipe by its unique id
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    alert("Recipe successfully deleted!");
  };

  const RecipeCard = ({ recipe }) => {
    const handleCardClick = () => {
      navigate(`/recipe/${recipe.id}`);
    };

    const handleDeleteClick = (e) => {
      e.stopPropagation(); // Prevent navigation event
      deleteRecipe(recipe.id);
    };

    return (
      <div
        className="flex items-start bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="w-1/4">
          <img
            src={recipe.image || "https://via.placeholder.com/150"}
            alt={recipe.title}
            className="w-full h-24 object-cover rounded-md"
          />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{recipe.story}</p>
        </div>
        <div className="ml-4 flex items-center space-x-2">
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8 flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          My Recipes
        </h1>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <h2 className="font-semibold text-lg mb-4">Published Recipes</h2>
            {filterRecipes("publish").map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="w-1/2">
            <h2 className="font-semibold text-lg mb-4">Draft Recipes</h2>
            {filterRecipes("draft").map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
