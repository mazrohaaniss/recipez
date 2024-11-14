import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaSearch, FaBookmark } from 'react-icons/fa';

const RecipeCollection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

    const recipes = [
        {
            id: 1,
            title: 'Pecel',
            description:
                'Ini adalah salad tradisional Indonesia yang menampilkan berbagai macam sayuran yang dikukus atau direbus, seperti bayam, tauge, kacang panjang, dan kol, disajikan dengan saus kacang yang kaya dan pedas.',
            author: 'Tiwiz',
            image: 'https://asset.kompas.com/crops/Bl583WdJr0__J2epTtcT-4azxOQ=/60x23:959x622/1200x800/data/photo/2020/11/05/5fa3f16d9c1cf.jpg',
            authorImage: 'https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg',
        },
        {
            id: 2,
            title: 'Chicken Steak',
            description:
                'Steak ayam yang dimasak dengan bumbu yang kaya dan nikmat, sempurna disajikan dengan saus dan kentang goreng.',
            author: 'Tiwiz',
            image: 'https://www.astronauts.id/blog/wp-content/uploads/2023/01/Kumpulan-Resep-Chicken-Steak-Viral.jpg',
            authorImage: 'https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg',
        },
        {
            id: 3,
            title: 'Mie Ayam',
            description:
                'Hidangan mie ayam dengan potongan ayam yang empuk dan kaldu gurih, menjadikannya pilihan favorit untuk makan siang atau malam.',
            author: 'Tiwiz',
            image: 'https://akcdn.detik.net.id/visual/2022/10/26/1405353819_43.jpeg?w=720&q=90',
            authorImage: 'https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg',
        },
        {
            id: 4,
            title: 'Bakso',
            description:
                'Bakso, bola daging sapi yang kenyal dan lezat, disajikan dengan kuah kaldu yang hangat dan mie atau nasi.',
            author: 'Tiwiz',
            image: 'https://guide.horego.com/wp-content/uploads/2023/11/bakso-jakarta-utara-terenak-jpg.webp',
            authorImage: 'https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg',
        },
        {
            id: 5,
            title: 'Pizza',
            description:
                'Pizza dengan topping beragam, mulai dari keju leleh, saus tomat, hingga topping pilihan seperti pepperoni, sayuran, atau daging.',
            author: 'Tiwiz',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg',
            authorImage: 'https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg',
        },
        {
            id: 6,
            title: 'Burger',
            description:
                'Burger lezat yang terdiri dari patty daging sapi, sayuran segar, dan saus, disajikan dalam roti empuk.',
            author: 'Tiwiz',
            image: 'https://img.kurio.network/-ltYsFALO68mNha9xrka0B9fJAs=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/20/07/01/f3f1874f-775f-4880-9821-2ea0756aba6a.jpg',
            authorImage: 'https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg',
        },
    ];

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleBookmark = (recipe) => {
        if (bookmarkedRecipes.some((item) => item.id === recipe.id)) {
            setBookmarkedRecipes(bookmarkedRecipes.filter((item) => item.id !== recipe.id));
        } else {
            setBookmarkedRecipes([...bookmarkedRecipes, recipe]);
        }
    };

    return (
        <div className="bg-blue-50 min-h-screen p-8">
            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari Koleksi Resep"
                        className="w-full p-3 pl-10 rounded-full bg-white shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-500" />
                </div>
            </div>

            {/* Recipe Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <Link
                            to={`/detailcollection/${recipe.id}`} // Mengarahkan ke halaman detail berdasarkan ID resep
                            key={recipe.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-4"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-24 h-24 object-cover rounded-lg mr-4"
                                style={{ width: '150px', height: '150px' }}
                            />
                            <div className="flex-1">
                                <h2 className="text-xl text-left font-bold text-gray-800 mb-1">{recipe.title}</h2>
                                <p className="text-gray-600 text-left text-sm mb-2">{recipe.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={recipe.authorImage}
                                            alt={recipe.author}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-gray-600 text-sm">{recipe.author}</span>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleBookmark(recipe);
                                        }}
                                        className="text-gray-400 hover:text-blue-600"
                                    >
                                        <FaBookmark className={`w-6 h-6 ${bookmarkedRecipes.some((item) => item.id === recipe.id) ? 'text-blue-600' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-600">Tidak ada resep yang ditemukan.</p>
                )}
            </div>
        </div>
    );
};

export default RecipeCollection;
