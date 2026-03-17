import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>›</span>
            <Link href="/categories/kitchen" className="hover:text-blue-600">Kitchen & Dining</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Ceramic Artisan Mug</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <div>
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center text-gray-400 border-2 border-dashed">
              [Product Image]
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ceramic Artisan Mug</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <span className="text-green-600 text-xl">🟢</span>
                <span className="font-semibold ml-1">4.9</span>
              </div>
              <span className="text-gray-500 ml-2">(120 Reviews)</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold text-gray-900 mb-6">$24.00</p>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Handcrafted from premium ceramic, this minimalist mug is perfect for your morning brew. 
              Featuring a smooth, matte finish in soft pastel tones, it effortlessly complements any 
              modern kitchen aesthetic. Its ergonomic handle ensures a comfortable grip, while the 
              thick walls keep your beverage warm for longer. Microwave and dishwasher safe.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Add to Cart
              </button>
              <button className="w-full border-2 border-purple-600 text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-50 transition text-lg">
                Ask AI about this item
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="border-b pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">Sarah Jenkins</h3>
                <span className="text-green-600">5.0</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">2 weeks ago</p>
              <p className="text-gray-700">
                Absolutely love this mug! The color is exactly as pictured, a beautiful soft pastel. 
                It feels very sturdy and the handle is the perfect size. Highly recommend!
              </p>
            </div>

            {/* Review 2 */}
            <div className="border-b pb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">Michael T.</h3>
                <span className="text-green-600">4.8</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">1 month ago</p>
              <p className="text-gray-700">
                Great quality ceramic. It holds heat really well compared to my other mugs. 
                The matte finish is gorgeous but be careful as it can show coffee stains if you don't 
                rinse it out quickly.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Items Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Similar items based on your taste</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Ceramic Pour Over Set</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.8</span>
                  <span className="text-gray-500 ml-2">(84)</span>
                </div>
                <p className="font-bold mt-2">$45.00</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Espresso Cup Duo</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.9</span>
                  <span className="text-gray-500 ml-2">(210)</span>
                </div>
                <p className="font-bold mt-2">$28.00</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold">Precision Gooseneck Kettle</h3>
                <div className="flex items-center mt-1">
                  <span className="text-green-600">🟢 4.7</span>
                  <span className="text-gray-500 ml-2">(156)</span>
                </div>
                <p className="font-bold mt-2">$65.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Assistant Chat - Fixed at bottom right */}
      <div className="fixed bottom-4 right-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-200">
        {/* Chat Header */}
        <div className="p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
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
            <div className="bg-blue-600 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-white">I need a gift for a coffee lover, under $50.</p>
            </div>
          </div>
          
          {/* Assistant Response */}
          <div className="flex">
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-800">
                I can help with that! We have some great artisan mugs and premium beans. Want to see one?
              </p>
            </div>
          </div>
        </div>
        
        {/* Chat Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
