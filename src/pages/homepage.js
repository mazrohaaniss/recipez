// src/pages/Home.js
import React, { useState } from 'react';

const Home = () => {
  // Initial list of recipes
  const allRecipes = [
    { name: 'Omlet', src: 'https://img.harianjogja.com/posts/2024/09/03/1187015/omlet-stockcake.jpg' },
    { name: 'Telur', src: 'https://cdn0-production-images-kly.akamaized.net/K3L-zc8Iem7-nIH01AAVXgVLIEg=/0x0:1920x1082/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2559225/original/035309500_1546271126-kitchen-775746_1920.jpg' },
    { name: 'Pastel', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr3rmDO3bNGmjm9eY65_0x1J_jikkGehrPg&s' },
    { name: 'Cheese Cake', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/250px-Baked_cheesecake_with_raspberries_and_blueberries.jpg' },
    { name: 'Pecel Lele', src: 'https://kurio-img.kurioapps.com/20/11/21/b2aecfb2-fefd-415f-9424-2485a95d41ef.png' },
    { name: 'Rendang', src: 'https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9_600x400.jpg' },
    { name: 'Rujak', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8bTsl9s5ckRJ75lPvJjZtdDJtZLP6mgoqA&s' },
    { name: 'Pempek', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHaqb3ipAgJqSwl3r64V2oP2KK6JWqIi6_Q&s' },
    { name: 'Tongseng', src: 'https://i.ytimg.com/vi/En61fH58CBM/maxresdefault.jpg' },
    { name: 'Piscok', src: 'https://radarmukomuko.bacakoran.co/upload/407fb558171c30a09ff890f30d3262ad.jpg' },
    { name: 'Lontong Balap', src: 'https://awsimages.detik.net.id/community/media/visual/2021/09/27/resep-lontong-balap-surabaya-1.jpeg?w=1200' },
    { name: 'Garang Asem', src: 'https://pict.sindonews.net/dyn/850/pena/news/2020/07/13/185/98840/garang-asem-ayam-makanan-khas-jawa-tengah-yang-bisa-dibuat-di-rumah-jqq.jpg' },
  ];

  // State to hold the search query and filtered recipes
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

  // Handler for search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter recipes based on the search query
    const filtered = allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://asset-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-proses-memasak.jpg"
          alt="Kitchen Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Create Delicious Meals from Your Own Kitchen</h1>
          <div className="w-3/4 max-w-lg">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="search any recipe"
                className="w-full py-3 px-4 pl-12 text-gray-600 rounded-full shadow-md focus:outline-none"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm6.31 11.9a9.92 9.92 0 0 1-1.41 1.42l5.3 5.3-1.41 1.41-5.3-5.3a9.92 9.92 0 0 1-1.42 1.41A10.03 10.03 0 1 1 20 10a9.93 9.93 0 0 1-3.69 3.9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Recipes Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-left">Popular Recipes</h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={recipe.src} alt={recipe.name} className="w-full h-24 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
                  <p className="text-sm font-semibold">{recipe.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No recipes found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
