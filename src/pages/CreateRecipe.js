import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid'; // Import the Trash Icon from Heroicons

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState([{ step: '', image: null }]);
  const [image, setImage] = useState(null);

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const addStep = () => {
    setSteps([...steps, { step: '', image: null }]);
  };

  const deleteIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const deleteStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newSteps = [...steps];
      newSteps[index].image = URL.createObjectURL(file);
      setSteps(newSteps);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8 flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">My Recipe</h1>
        
        {/* Recipe Image */}
        <div 
          className="bg-gray-200 h-48 flex items-center justify-center rounded-md mb-6 cursor-pointer" 
          onClick={() => document.getElementById('recipe-image').click()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange('recipe', e)}
            className="hidden"
            id="recipe-image"
          />
          {image ? (
            <img src={image} alt="Recipe" className="h-full w-full object-cover rounded-md" />
          ) : (
            <p className="text-gray-500 text-center">Optional Foto Resep<br />Tambahkan foto akhir masakan</p>
          )}
        </div>

        {/* Recipe Title */}
        <input
          type="text"
          placeholder="(Wajib) Judul Resep"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />

        {/* Recipe Story */}
        <textarea
          placeholder="(Opsional) Cerita di balik masakan"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />

        {/* Serving Size and Cooking Time */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Porsi"
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Lama Memasak"
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Nutrition Values */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Nilai Gizi</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Protein"
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Karbohidrat"
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Kalori"
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Bahan - Bahan</h2>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                placeholder={`Bahan ${index + 1}`}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => deleteIngredient(index)}
                className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            onClick={addIngredient}
            className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 mt-2"
          >
            + Bahan
          </button>
        </div>

        {/* Steps */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Langkah</h2>
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                placeholder={`Langkah ${index + 1}`}
                value={step.step}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index].step = e.target.value;
                  setSteps(newSteps);
                }}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <div
                className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-md cursor-pointer"
                onClick={() => document.getElementById(`step-image-${index}`).click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                  className="hidden"
                  id={`step-image-${index}`}
                />
                {step.image ? (
                  <img src={step.image} alt={`Step ${index + 1}`} className="h-full w-full object-cover rounded-md" />
                ) : (
                  <p className="text-gray-500 text-center">+ Foto</p>
                )}
              </div>
              <button
                onClick={() => deleteStep(index)}
                className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            onClick={addStep}
            className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 mt-2"
          >
            + Langkah
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
            Terbitkan
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">
            Simpan dan Tutup
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
