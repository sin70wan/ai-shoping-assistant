import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Product data for different categories
  const featuredProducts = [
    {
      id: 1,
      name: "Ceramic Artisan Mug",
      category: "Kitchen",
      rating: 4.9,
      reviews: 120,
      price: 24.00,
      image: "[Mug Image]"
    },
    {
      id: 2,
      name: "Lumina Desk Lamp",
      category: "Electronics",
      rating: 4.8,
      reviews: 89,
      price: 89.00,
      image: "[Lamp Image]"
    },
    {
      id: 3,
      name: "Everyday Canvas Tote",
      category: "Fashion",
      rating: 4.7,
      reviews: 234,
      price: 35.00,
      image: "[Tote Image]"
    },
    {
      id: 4,
      name: "Premium Leather Sneakers",
      category: "Shoes",
      rating: 4.8,
      reviews: 156,
      price: 79.99,
      image: "[Shoes Image]"
    },
    {
      id: 5,
      name: "Smart Watch Series 5",
      category: "Electronics",
      rating: 4.6,
      reviews: 312,
      price: 199.99,
      image: "[Watch Image]"
    },
    {
      id: 6,
      name: "Cotton Hoodie",
      category: "Clothing",
      rating: 4.5,
      reviews: 89,
      price: 45.99,
      image: "[Hoodie Image]"
    }
  ];

  const categoryProducts = {
    clothing: [
      { name: "Classic White Tee", price: 19.99, rating: 4.5, reviews: 67 },
      { name: "Slim Fit Jeans", price: 49.99, rating: 4.6, reviews: 89 },
      { name: "Summer Dress", price: 39.99, rating: 4.7, reviews: 45 },
    ],
    shoes: [
      { name: "Running Shoes", price: 89.99, rating: 4.8, reviews: 234 },
      { name: "Casual Loafers", price: 69.99, rating: 4.6, reviews: 78 },
      { name: "Hiking Boots", price: 129.99, rating: 4.9, reviews: 56 },
    ],
    kitchen: [
      { name: "Non-Stick Pan Set", price: 79.99, rating: 4.7, reviews: 145 },
      { name: "Chef's Knife", price: 45.99, rating: 4.8, reviews: 98 },
      { name: "Glass Food Container", price: 24.99, rating: 4.5, reviews: 67 },
    ],
    electronics: [
      { name: "Wireless Earbuds", price: 59.99, rating: 4.6, reviews: 445 },
      { name: "Tablet Stand", price: 29.99, rating: 4.4, reviews: 123 },
      { name: "Phone Charger", price: 19.99, rating: 4.5, reviews: 567 },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#fce7f3' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Your Personal Shopping Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us what you're looking for, and our AI will find the perfect products 
            for you, matching your style and budget.
          </p>
          <button
            className="px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: '#7dd3fc', color: 'white' }}
          >
            Start Chatting
          </button>
        </div>
      </section>

      {/* Featured Products - Now with 6 items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  {product.image}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-green-600">🟢 {product.rating}</span>
                    <span className="text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
                  <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Clothing Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">👕 Clothing</h3>
              <Link href="/categories/clothing" className="text-sm text-blue-500 hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryProducts.clothing.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                  <div className="h-32 bg-gray-100 rounded mb-3"></div>
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-green-600 text-sm">🟢 {item.rating}</span>
                    <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
                  </div>
                  <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shoes Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">👟 Shoes</h3>
              <Link href="/categories/shoes" className="text-sm text-blue-500 hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryProducts.shoes.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                  <div className="h-32 bg-gray-100 rounded mb-3"></div>
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-green-600 text-sm">🟢 {item.rating}</span>
                    <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
                  </div>
                  <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">🍳 Kitchen</h3>
              <Link href="/categories/kitchen" className="text-sm text-blue-500 hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryProducts.kitchen.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                  <div className="h-32 bg-gray-100 rounded mb-3"></div>
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-green-600 text-sm">🟢 {item.rating}</span>
                    <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
                  </div>
                  <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Electronics Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">📱 Electronics</h3>
              <Link href="/categories/electronics" className="text-sm text-blue-500 hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryProducts.electronics.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                  <div className="h-32 bg-gray-100 rounded mb-3"></div>
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-green-600 text-sm">🟢 {item.rating}</span>
                    <span className="text-gray-400 text-xs ml-1">({item.reviews})</span>
                  </div>
                  <p className="font-bold mt-1">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
        <div className="bg-[#7dd3fc] rounded-t-lg p-3">
          <p className="font-semibold text-white">Shopping Assistant</p>
        </div>
        <div className="p-4 h-80 overflow-y-auto space-y-4">
          <div className="flex">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-800">Hi there! Looking for anything specific today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#7dd3fc] rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-white">I need a gift for a coffee lover, under $50.</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-800 mb-2">I can help with that! We have some great artisan mugs and premium beans. Want to see one?</p>
              <div className="bg-white p-2 rounded border mt-2">
                <p className="font-medium">Ceramic Artisan Mug</p>
                <p className="text-green-600 text-sm">🟢 4.9 (120)</p>
                <p className="font-bold">$24.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#7dd3fc] text-white px-4 py-2 rounded-lg hover:opacity-90">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}