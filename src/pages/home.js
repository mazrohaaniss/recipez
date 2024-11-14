import React, { useState } from 'react';
import { FaSearch, FaBookmark } from 'react-icons/fa';

const Dashboard = () => {
  const allRecipes = [
    { name: 'Omlet', src: 'https://img.harianjogja.com/posts/2024/09/03/1187015/omlet-stockcake.jpg' },
    { name: 'Telur', src: 'https://cdn0-production-images-kly.akamaized.net/K3L-zc8Iem7-nIH01AAVXgVLIEg=/0x0:1920x1082/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2559225/original/035309500_1546271126-kitchen-775746_1920.jpg' },
    { name: 'Pastel', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr3rmDO3bNGmjm9eY65_0x1J_jikkGehrPg&s' },
    { name: 'Cheese Cake', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/250px-Baked_cheesecake_with_raspberries_and_blueberries.jpg' },
    { name: 'Pecel Lele', src: 'https://kurio-img.kurioapps.com/20/11/21/b2aecfb2-fefd-415f-9424-2485a95d41ef.png' },
    { name: 'Rendang', src: 'https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9_600x400.jpg' },
    { name: 'Rujak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8bTsl9s5ckRJ75lPvJjZtdDJtZLP6mgoqA&s' },
    { name: 'Pempek', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHaqb3ipAgJqSwl3r64V2oP2KK6JWqIi6_Q&s' },
    { name: 'Pecel', src: 'https://asset.kompas.com/crops/Bl583WdJr0__J2epTtcT-4azxOQ=/60x23:959x622/1200x800/data/photo/2020/11/05/5fa3f16d9c1cf.jpg'},
    { name: 'Chiken Steak', src: 'https://www.astronauts.id/blog/wp-content/uploads/2023/01/Kumpulan-Resep-Chicken-Steak-Viral.jpg'},
    { name: 'Mie Ayam', src: 'https://akcdn.detik.net.id/visual/2022/10/26/1405353819_43.jpeg?w=720&q=90'},
    { name: 'Bakso', src: 'https://guide.horego.com/wp-content/uploads/2023/11/bakso-jakarta-utara-terenak-jpg.webp'},
    { name: 'Pizza', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg'},
    { name: 'Burger', src: 'https://img.kurio.network/-ltYsFALO68mNha9xrka0B9fJAs=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/20/07/01/f3f1874f-775f-4880-9821-2ea0756aba6a.jpg'},
    { name: 'Soto', src: 'https://asset.kompas.com/crops/Bs4oWJdV_9BRvZn1lZQBRWwX5l0=/0x0:1000x667/1200x800/data/photo/2024/01/16/65a5db1f6671b.jpg'},
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
              <img src={recipe.src} alt={recipe.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-3 text-left">{recipe.name}</h3> {/* Aligned left */}
              <p className="text-gray-500 text-sm mt-1 text-left">
                A delicious traditional Indonesian dish with spices and savory flavors.
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
