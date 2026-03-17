import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20" style={{ backgroundColor: '#fce7f3' }}>
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-5xl font-bold mb-4 text-gray-900">
      Your Personal Shopping Assistant
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Tell us what you're looking for, and our AI will find the perfect products 
      for you, matching your style and budget.
    </p>
    <button
      className="px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      style={{ backgroundColor: '#7dd3fc', color: 'white' }}
    >
      Start Chatting
    </button>
  </div>
</section>


      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 - Ceramic Artisan Mug */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                [Product Image]
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Ceramic Artisan Mug</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.9</span>
                  <span className="text-gray-500 ml-2">(120)</span>
                </div>
                <p className="text-xl font-bold mt-2">$24.00</p>
              </div>
            </div>

            {/* Product 2 - Lumina Desk Lamp */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                [Product Image]
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Lumina Desk Lamp</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.8</span>
                  <span className="text-gray-500 ml-2">(89)</span>
                </div>
                <p className="text-xl font-bold mt-2">$89.00</p>
              </div>
            </div>

            {/* Product 3 - Everyday Canvas Tote */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                [Product Image]
              </div>
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

      {/* Chat Interface - Fixed at bottom right */}
      <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
        {/* Chat Header */}
        <div className="bg-[#7dd3fc] rounded-lg p-3 max-w-[100%]">




  <p className="font-semibold">Shopping Assistant</p>
</div>

        
        {/* Chat Messages */}
        <div className="p-4 h-80 overflow-y-auto space-y-4">
          {/* Assistant Message */}
          <div className="flex">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-800">Hi there! Looking for anything specific today?</p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex justify-end">
<div className="bg-[#7dd3fc] rounded-lg p-3 max-w-[80%]">              <p className="text-sm text-white">I need a gift for a coffee lover, under $50.</p>
            </div>
          </div>
          
          {/* Assistant Response with Product */}
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
        
        {/* Chat Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           <button className="bg-[#7dd3fc] px-4 py-2 rounded-lg hover:bg-blue-700">
  Send
</button>

          </div>
        </div>
      </div>
    </div>
  );
}