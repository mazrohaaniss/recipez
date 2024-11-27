import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <p className="text-red-500 text-center text-lg font-semibold mt-8">
        Resep tidak ditemukan!
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      {/* Top Section: Recipe Image and Details */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{recipe.story}</p>
          <div className="mt-6 p-4 bg-green-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Nilai Gizi / Porsi</h3>
            <hr className="border-gray-300 mb-4" />
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Protein:</strong> {recipe.nutrition.protein} gram
              </p>
              <p>
                <strong>Karbohidrat:</strong> {recipe.nutrition.carbohydrates} gram
              </p>
              <p>
                <strong>Kalori:</strong> {recipe.nutrition.calories} kkal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Ingredients, Tools, and Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ingredients and Tools Section */}
        <div className="space-y-6">
          {/* Ingredients Section */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Bahan-bahan</h3>
            <p className="text-gray-600 text-sm italic mb-4">
              <i className="far fa-clock"></i> {recipe.prepTime} menit
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section (Alat) */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Alat</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {recipe.tools.map((tool, index) => (
                <li key={index}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Instruksi</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={index} className="flex justify-between items-center">
                <p className="flex-1">{step.step}</p>
                {step.image && (
                  <img
                    src={step.image}
                    alt={`Langkah ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-md ml-4" // Adjust size and spacing
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
