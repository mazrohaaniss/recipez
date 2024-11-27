import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([{ quantity: '', name: '' }]);
  const [tools, setTools] = useState(['']); // State untuk alat
  const [steps, setSteps] = useState([{ step: '', image: null }]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [nutrition, setNutrition] = useState({ protein: '', carbohydrates: '', calories: '' });
  const [prepTime, setPrepTime] = useState('');
  const navigate = useNavigate();

  const addIngredient = () => setIngredients([...ingredients, { quantity: '', name: '' }]);
  const addTool = () => setTools([...tools, '']); // Tambahkan alat baru
  const addStep = () => setSteps([...steps, { step: '', image: null }]);

  const deleteIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const deleteTool = (index) => {
    const newTools = tools.filter((_, i) => i !== index); // Hapus alat tertentu
    setTools(newTools);
  };

  const deleteStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      if (index === 'recipe') {
        setImage(URL.createObjectURL(file));
      } else {
        const newSteps = [...steps];
        newSteps[index].image = URL.createObjectURL(file);
        setSteps(newSteps);
      }
    }
  };

  const saveRecipe = (type) => {
    const recipeData = {
      id: new Date().getTime().toString(),
      title,
      story,
      image,
      prepTime,
      nutrition,
      ingredients,
      tools, // Tambahkan tools ke data
      steps,
      type,
    };

    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    existingRecipes.push(recipeData);
    localStorage.setItem("recipes", JSON.stringify(existingRecipes));

    alert(type === "publish" ? "Recipe Berhasil Dipulish!" : "Recipe Berhasil Disimpan");
    navigate(`/recipe/${recipeData.id}`);
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setStory('');
    setIngredients([{ quantity: '', name: '' }]);
    setTools(['']); // Reset tools
    setSteps([{ step: '', image: null }]);
    setImage(null);
    setNutrition({ protein: '', carbohydrates: '', calories: '' });
    setPrepTime('');
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8 flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Create Recipe</h1>

        <div className="bg-gray-200 h-48 flex items-center justify-center rounded-md mb-6 cursor-pointer" onClick={() => document.getElementById('recipe-image').click()}>
          <input type="file" accept="image/*" onChange={(e) => handleImageChange('recipe', e)} className="hidden" id="recipe-image" />
          {image ? <img src={image} alt="Recipe" className="h-full w-full object-cover rounded-md" /> : <p className="text-gray-500 text-center">Tambahkan Foto Recipe</p>}
        </div>

        <input type="text" placeholder="Judul" className="w-full p-3 mb-4 border border-gray-300 rounded-md" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Latar Belakang Recipe (Optional)" className="w-full p-3 mb-4 border border-gray-300 rounded-md" value={story} onChange={(e) => setStory(e.target.value)} />
        <input type="text" placeholder="Preparation Time" className="w-full p-3 mb-4 border border-gray-300 rounded-md" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} />

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Nilai Gizi/Porsi</h2>
          <div className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="Protein (g)" className="p-3 border border-gray-300 rounded-md" value={nutrition.protein} onChange={(e) => setNutrition({ ...nutrition, protein: e.target.value })} />
            <input type="text" placeholder="Karbohidrat (g)" className="p-3 border border-gray-300 rounded-md" value={nutrition.carbohydrates} onChange={(e) => setNutrition({ ...nutrition, carbohydrates: e.target.value })} />
            <input type="text" placeholder="Kalori (kcal)" className="p-3 border border-gray-300 rounded-md" value={nutrition.calories} onChange={(e) => setNutrition({ ...nutrition, calories: e.target.value })} />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Bahan-Bahan</h2>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                placeholder="Jumlah"
                value={ingredient.quantity}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index].quantity = e.target.value;
                  setIngredients(newIngredients);
                }}
                className="w-1/3 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Nama Bahan"
                value={ingredient.name}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index].name = e.target.value;
                  setIngredients(newIngredients);
                }}
                className="w-2/3 p-3 border border-gray-300 rounded-md"
              />
              <button onClick={() => deleteIngredient(index)} className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"><TrashIcon className="h-5 w-5" /></button>
            </div>
          ))}
          <button onClick={addIngredient} className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 mt-2">+ Tambah Bahan</button>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Alat</h2>
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                placeholder={`Alat ${index + 1}`}
                value={tool}
                onChange={(e) => {
                  const newTools = [...tools];
                  newTools[index] = e.target.value;
                  setTools(newTools);
                }}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button onClick={() => deleteTool(index)} className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"><TrashIcon className="h-5 w-5" /></button>
            </div>
          ))}
          <button onClick={addTool} className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 mt-2">+ Tambah Alat</button>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Instruksi</h2>
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
              <div className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-md cursor-pointer" onClick={() => document.getElementById(`step-image-${index}`).click()}>
                <input type="file" accept="image/*" onChange={(e) => handleImageChange(index, e)} className="hidden" id={`step-image-${index}`} />
                {step.image ? <img src={step.image} alt={`Step ${index + 1}`} className="h-full w-full object-cover rounded-md" /> : <p className="text-gray-500 text-center">+ Photo</p>}
              </div>
              <button onClick={() => deleteStep(index)} className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"><TrashIcon className="h-5 w-5" /></button>
            </div>
          ))}
          <button onClick={addStep} className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 mt-2">+ Tambah Langkah</button>
        </div>

        <div className="flex justify-between mt-8">
          <button onClick={() => saveRecipe('publish')} className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">Publish</button>
          <button onClick={() => saveRecipe('draft')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">Save as Draft</button>
          <button onClick={clearForm} className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
