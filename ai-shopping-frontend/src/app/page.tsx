export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Your Personal Shopping Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us what you're looking for, and our AI will find the perfect products 
            for you, matching your style and budget.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Start Chatting
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Ceramic Artisan Mug</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.9</span>
                  <span className="text-gray-500 ml-2">(120)</span>
                </div>
                <p className="text-xl font-bold mt-2">$24.00</p>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Lumina Desk Lamp</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.8</span>
                  <span className="text-gray-500 ml-2">(89)</span>
                </div>
                <p className="text-xl font-bold mt-2">$89.00</p>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Everyday Canvas Tote</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.7</span>
                  <span className="text-gray-500 ml-2">(234)</span>
                </div>
                <p className="text-xl font-bold mt-2">$35.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}