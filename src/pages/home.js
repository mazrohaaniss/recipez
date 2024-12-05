import React, { useState } from 'react';
import { FaSearch, FaBookmark } from 'react-icons/fa';

// Kelas dasar untuk resep
class Recipe {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }

  // Method yang bisa di-override oleh kelas turunan
  getRecipeDetails() {
    return `Recipe: ${this.name}`;
  }
}

// Kelas turunan untuk resep Indonesia
class IndonesianRecipe extends Recipe {
  constructor(name, src, description) {
    super(name, src);
    this.description = description;
  }

  // Override method getRecipeDetails
  getRecipeDetails() {
    return `Indonesian Recipe: ${this.name} - ${this.description}`;
  }
}

const Dashboard = () => {
  // Data resep
  const allRecipes = [
    new Recipe('Omlet', 'https://img.harianjogja.com/posts/2024/09/03/1187015/omlet-stockcake.jpg'),
    new IndonesianRecipe('Rendang', 'https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9_600x400.jpg', 'Delicious beef stew'),
    new Recipe('Telur', 'https://cdn0-production-images-kly.akamaized.net/K3L-zc8Iem7-nIH01AAVXgVLIEg=/0x0:1920x1082/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2559225/original/035309500_1546271126-kitchen-775746_1920.jpg'),
    new Recipe('Cheese Cake', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/250px-Baked_cheesecake_with_raspberries_and_blueberries.jpg'),
    new IndonesianRecipe('Pecel Lele', 'https://kurio-img.kurioapps.com/20/11/21/b2aecfb2-fefd-415f-9424-2485a95d41ef.png', 'Fried catfish with peanut sauce'),
    new IndonesianRecipe('Rendang', 'https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9_600x400.jpg', 'Delicious beef stew'),
    new IndonesianRecipe('Rujak', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8bTsl9s5ckRJ75lPvJjZtdDJtZLP6mgoqA&s', 'Spicy fruit salad'),
    new IndonesianRecipe('Pempek', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHaqb3ipAgJqSwl3r64V2oP2KK6JWqIi6_Q&s', 'Fish cake from Palembang'),
    new IndonesianRecipe('Tongseng', 'https://i.ytimg.com/vi/En61fH58CBM/maxresdefault.jpg', 'Spicy meat soup from Java'),
    new IndonesianRecipe('Piscok', 'https://radarmukomuko.bacakoran.co/upload/407fb558171c30a09ff890f30d3262ad.jpg', 'Fried banana roll'),
    new IndonesianRecipe('Lontong Balap', 'https://awsimages.detik.net.id/community/media/visual/2021/09/27/resep-lontong-balap-surabaya-1.jpeg?w=1200', 'Rice cake with soup from Surabaya'),
    new IndonesianRecipe('Garang Asem', 'https://pict.sindonews.net/dyn/850/pena/news/2020/07/13/185/98840/garang-asem-ayam-makanan-khas-jawa-tengah-yang-bisa-dibuat-di-rumah-jqq.jpg', 'Chicken in sour soup from Central Java'),
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(query));
    setFilteredRecipes(filtered);
  };

  const handleBookmark = (recipeName) => {
    setBookmarkedRecipes((prev) => {
      if (prev.includes(recipeName)) {
        return prev.filter((name) => name !== recipeName); // Remove from bookmarks if already bookmarked
      } else {
        return [...prev, recipeName]; // Add to bookmarks
      }
    });
  };

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      {/* Centered and Enhanced Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-full shadow-md p-2 bg-white">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search any recipe"
            className="w-full py-2 px-3 text-gray-600 rounded-full focus:outline-none"
          />
        </div>
      </div>

      {/* Popular Recipes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-left">Popular Recipes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredRecipes.slice(0, 8).map((recipe, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.src} alt={recipe.name} className="w-full h-24 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-left py-1 px-2">
                <p className="text-sm font-semibold">{recipe.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe List Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-left">
          Make your own food at <span className="text-blue-500">home</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={recipe.src}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded" // Increased height to h-48
              />
              <h3 className="text-xl font-semibold mt-3 text-left">{recipe.name}</h3> {/* Aligned left */}
              <p className="text-gray-500 text-sm mt-1 text-left">
                {recipe.getRecipeDetails()}
              </p>
              <div className="flex items-center mt-3">
                <img
                  src="https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg" // replace with the actual user profile image URL
                  alt="user profile"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <p className="text-sm text-gray-700">Twiz</p>
                <button
                  onClick={() => handleBookmark(recipe.name)}
                  className={`ml-auto text-gray-500 ${bookmarkedRecipes.includes(recipe.name) ? 'text-blue-500' : ''}`}
                >
                  <FaBookmark className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
