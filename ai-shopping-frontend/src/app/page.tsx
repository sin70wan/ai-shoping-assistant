import Link from 'next/link';

export default function Home() {
  // 23 products with matching IDs for detail page
  const featuredProducts = [
    {
      id: 1,
      name: "Ceramic Artisan Mug",
      category: "Kitchen",
      rating: 4.9,
      reviews: 120,
      price: 24.00,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "French Press Coffee Maker",
      category: "Kitchen",
      rating: 4.7,
      reviews: 89,
      price: 34.99,
      image: "https://images.unsplash.com/photo-1564135624576-c5c88640f235?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Stainless Steel Cookware Set",
      category: "Kitchen",
      rating: 4.8,
      reviews: 234,
      price: 189.99,
      image: "https://images.unsplash.com/photo-1584990347447-9153a4f8e9c6?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Chef's Knife Set",
      category: "Kitchen",
      rating: 4.9,
      reviews: 156,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1593617999960-25fa2d1faca4?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Non-Stick Frying Pan",
      category: "Kitchen",
      rating: 4.6,
      reviews: 312,
      price: 29.99,
      image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Glass Food Storage Set",
      category: "Kitchen",
      rating: 4.7,
      reviews: 445,
      price: 39.99,
      image: "https://images.unsplash.com/photo-1607427362377-08e7649d6b8e?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Electric Kettle",
      category: "Kitchen",
      rating: 4.8,
      reviews: 189,
      price: 49.99,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Wooden Cutting Board",
      category: "Kitchen",
      rating: 4.8,
      reviews: 267,
      price: 34.99,
      image: "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=400&h=400&fit=crop"
    },
    {
      id: 9,
      name: "KitchenAid Stand Mixer",
      category: "Kitchen",
      rating: 4.9,
      reviews: 678,
      price: 349.99,
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop"
    },
    {
      id: 10,
      name: "Spice Rack Set",
      category: "Kitchen",
      rating: 4.5,
      reviews: 98,
      price: 24.99,
      image: "https://images.unsplash.com/photo-1537206568673-2ecbed8a9145?w=400&h=400&fit=crop"
    },
    {
      id: 11,
      name: "Lumina Desk Lamp",
      category: "Electronics",
      rating: 4.8,
      reviews: 89,
      price: 89.00,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop"
    },
    {
      id: 12,
      name: "Smart Watch Series 5",
      category: "Electronics",
      rating: 4.6,
      reviews: 312,
      price: 199.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop"
    },
    {
      id: 13,
      name: "Wireless Headphones",
      category: "Electronics",
      rating: 4.8,
      reviews: 445,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    },
    {
      id: 14,
      name: "Bluetooth Speaker",
      category: "Electronics",
      rating: 4.7,
      reviews: 234,
      price: 59.99,
      image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=400&h=400&fit=crop"
    },
    {
      id: 15,
      name: "Tablet 10-inch",
      category: "Electronics",
      rating: 4.5,
      reviews: 156,
      price: 299.99,
      image: "https://images.unsplash.com/photo-1544244011-0ccb3c9f9f6c?w=400&h=400&fit=crop"
    },
    {
      id: 16,
      name: "4K Drone",
      category: "Electronics",
      rating: 4.8,
      reviews: 89,
      price: 449.99,
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400&h=400&fit=crop"
    },
    {
      id: 17,
      name: "Gaming Mouse",
      category: "Electronics",
      rating: 4.7,
      reviews: 567,
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
    },
    {
      id: 18,
      name: "Mechanical Keyboard",
      category: "Electronics",
      rating: 4.9,
      reviews: 423,
      price: 129.99,
      image: "https://images.unsplash.com/photo-1587822057517-10453d2409c8?w=400&h=400&fit=crop"
    },
    {
      id: 19,
      name: "External SSD 1TB",
      category: "Electronics",
      rating: 4.8,
      reviews: 312,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=400&fit=crop"
    },
    {
      id: 20,
      name: "Smart Home Hub",
      category: "Electronics",
      rating: 4.5,
      reviews: 178,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop"
    },
    {
      id: 21,
      name: "Premium Leather Sneakers",
      category: "Shoes",
      rating: 4.8,
      reviews: 156,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
    },
    {
      id: 22,
      name: "Running Shoes",
      category: "Shoes",
      rating: 4.8,
      reviews: 312,
      price: 99.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
    },
    {
      id: 23,
      name: "Hiking Boots",
      category: "Shoes",
      rating: 4.9,
      reviews: 98,
      price: 129.99,
      image: "https://images.unsplash.com/photo-1520219306100-59d0f1c6e788?w=400&h=400&fit=crop"
    }
  ];

  const categories = [
    { name: "Clothing", icon: "👕", color: "bg-blue-50" },
    { name: "Shoes", icon: "👟", color: "bg-green-50" },
    { name: "Kitchen", icon: "🍳", color: "bg-yellow-50" },
    { name: "Electronics", icon: "📱", color: "bg-purple-50" },
    { name: "Sports", icon: "⚽", color: "bg-red-50" },
    { name: "Fashion", icon: "👜", color: "bg-indigo-50" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Your Personal Shopping Assistant
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us what you're looking for, and our AI will find the perfect products 
            for you, matching your style and budget.
          </p>
          <button className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition shadow-sm">
            Start Chatting
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className={`${cat.color} rounded-lg p-4 text-center hover:shadow-md transition cursor-pointer`}>
                <span className="text-3xl mb-2 block">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <Link href="/products" className="text-sky-500 text-sm hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-xs text-gray-500">{product.category}</span>
                    <h3 className="font-medium text-gray-800 text-sm mt-1">{product.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 text-xs">★ {product.rating}</span>
                      <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      <button className="px-2 py-1 bg-sky-500 text-white text-xs rounded hover:bg-sky-600">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Assistant */}
      <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
        <div className="bg-sky-500 p-3 rounded-t-lg">
          <p className="font-medium text-white">Shopping Assistant</p>
        </div>
        <div className="p-3 h-48 overflow-y-auto bg-gray-50">
          <div className="bg-white rounded-lg p-2 mb-2 max-w-[85%] shadow-sm">
            <p className="text-xs">Hi there! Looking for anything specific today?</p>
          </div>
          <div className="bg-sky-500 text-white rounded-lg p-2 mb-2 ml-auto max-w-[85%]">
            <p className="text-xs">I need a gift for a coffee lover, under $50.</p>
          </div>
          <div className="bg-white rounded-lg p-2 max-w-[85%]">
            <p className="text-xs">I can help with that! We have some great artisan mugs.</p>
          </div>
        </div>
        <div className="p-3 border-t border-gray-100">
          <input type="text" placeholder="Type a message..." className="w-full text-xs p-2 border border-gray-200 rounded"/>
        </div>
      </div>
    </div>
  );
}