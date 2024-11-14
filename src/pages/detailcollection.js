import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

const DetailCollection = () => {
  const { id } = useParams();

  const recipes = [
    {
      id: 1,
      title: 'Pecel',
      description:
        'Ini adalah salad tradisional Indonesia yang menampilkan berbagai macam sayuran yang dikukus atau direbus, seperti bayam, tauge, kacang panjang, dan kol, disajikan dengan saus kacang yang kaya dan pedas.',
      image: 'https://asset.kompas.com/crops/Bl583WdJr0__J2epTtcT-4azxOQ=/60x23:959x622/1200x800/data/photo/2020/11/05/5fa3f16d9c1cf.jpg',
      
      nutrition: {
        protein: '18 gram',
        carbohydrates: '10 gram',
        calories: '10 kkal',
      },
      ingredients: [
        '1 ikat bayam',
        'Segenggam tauge',
        '10 batang kacang panjang',
        'Segenggam kol',
        '1 ons kacang tanah',
        '1 sdm gula aren',
        '1 sdt garam',
        '1 terasi bakar',
        '2 mata asam jawa',
        '2 lbr daun jeruk',
        '1 cabe merah',
        '4 rawit (sesuai selera)',
        'Secukupnya air'
      ],
      equipment: [
        'Pisau',
        'Talenan',
        'Panci',
        'Penggorengan',
        'Ulekan'
      ],
      instructions: [
        'Cuci dan potong sayuran',
        'Rebus sayuran sampai matang',
        'Goreng kacang tanah',
        'Haluskan semua bumbu, dan beri sedikit air serta koreksi rasa',
        'Susun sayuran di piring dan siram saus kacang'
      ],
      stepImages: [
        ['https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/05/04/memotong-sayuranjpg-20230504034207.jpg'], 
        [
          'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/03/05/feb19784951a4964964d3d519b974c7f-20220305101516.jpg', 
          'https://cdn-brilio-net.akamaized.net/webp/news/2023/02/10/248255/1200xauto-tanpa-bahan-tambahan-ini-cara-merebus-tauge-agar-tetap-segar-dan-renyah-2302104.jpg', 
          'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/08/28/kacang-panjang-rebusjpg-20230828022929.jpg'
        ],
        ['https://cdn-brilio-net.akamaized.net/news/2022/08/10/235081/1200xauto-cara-simpel-goreng-kacang-tanah-agar-matang-merata-dan-antigosong-220810d.jpg'], // Gambar untuk langkah 3
        [
          'https://img-global.cpcdn.com/steps/265d1dd079a877a7/320x256cq70/sayur-pecel-bumbu-kacang-sarapan-pagiku-langkah-memasak-2-foto.webp', // Gambar pertama untuk langkah 4
          
        ],
        ['https://img-global.cpcdn.com/recipes/704b95c3a7e17d2e/1360x964cq70/tahu-telur-dadar-omelette-sayur-sambal-pecel-siram-1byanakkost-foto-resep-utama.webp']  // Gambar untuk langkah 5
      ],
    }
  ];

  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <div className="p-8 bg-gray-100">
      {recipe ? (
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover rounded-lg" />
            
           {/* Card Bahan-bahan */}
            <div className="mt-6 p-4 bg-gray-50 shadow-sm rounded-lg">
            <h2 className="text-xl font-semibold text-left text-gray-700 mb-2">Bahan-bahan</h2>
            
             {/* Ikon Waktu */}
             <div className="flex items-center mt-4 text-gray-600">
                <FaClock className="mr-2 text-gray-500" />
                <span className="text-lg">20 menit</span>
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <ul className="mt-2 text-gray-600 text-left list-disc list-inside space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>

           
            </div>

            {/* Card Peralatan */}
            <div className="mt-6 p-4 bg-gray-50 shadow-sm rounded-lg">
              <h2 className="text-xl font-semibold text-left text-gray-700 mb-2">Peralatan</h2>
              <hr className="border-t border-gray-300 mb-4" />
              <ul className="mt-2 text-gray-600 text-left list-disc list-inside space-y-1">
                {recipe.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h1 className="text-3xl font-bold text-left text-gray-800">{recipe.title}</h1>
            <hr className="border-t border-gray-300 mb-4" />
            <p className="mt-4 text-left text-gray-600">{recipe.description}</p>

            {/* Card Nilai Gizi */}
            <div className="mt-6 p-4 bg-gray-50 shadow-sm rounded-lg">
              <h2 className="text-xl font-semibold text-left text-gray-700">Nilai Gizi / Porsi</h2>
              <hr className="border-t border-gray-300 mb-4" />
              <div className="mt-2 text-left text-gray-600 space-y-1">
                <p>Protein: {recipe.nutrition.protein}</p>
                <p>Karbohidrat: {recipe.nutrition.carbohydrates}</p>
                <p>Kalori: {recipe.nutrition.calories}</p>
              </div>
            </div>

            {/* Card Instruksi */}
                <div className="mt-6 p-4 bg-gray-50 shadow-sm rounded-lg">
                <h2 className="text-xl font-semibold text-left text-gray-700">Instruksi</h2>
                <hr className="border-t border-gray-300 mb-4" />
                <ol className="mt-2 text-gray-600 text-left list-decimal list-inside space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-4">
                        {/* Nomor instruksi */}
                        <span className="flex-shrink-0">{index + 1}.</span>
                        
                        <div className="flex-grow">
                        {/* Teks instruksi */}
                        <p>{instruction}</p>
                        
                        {/* Gambar jika ada */}
                        {recipe.stepImages[index] && (
                            Array.isArray(recipe.stepImages[index]) ? (
                            <div className="flex space-x-4 mt-2">
                                {recipe.stepImages[index].map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={`Langkah ${index + 1} - Gambar ${imgIndex + 1}`}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                                ))}
                            </div>
                            ) : (
                            <img
                                src={recipe.stepImages[index][0]}
                                alt={`Langkah ${index + 1}`}
                                className="w-32 h-32 object-cover rounded-lg mt-2"
                            />
                            )
                        )}
                        </div>
                    </li>
                    ))}
                </ol>
                </div>

          </div>
        </div>
      ) : (
        <p>Resep tidak ditemukan.</p>
      )}
    </div>
  );
};

export default DetailCollection;
