import Link from 'next/link';

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with LumiAI and icons - EXACT match */}
     
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>›</span>
            <Link href="/categories/kitchen" className="hover:text-gray-600">Kitchen & Dining</Link>
            <span>›</span>
            <span className="text-gray-600">Ceramic Artisan Mug</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-gray-50 h-80 flex items-center justify-center text-gray-300 text-sm border border-gray-100">
              [Product Image]
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h1 className="text-3xl font-light text-gray-800 mb-2">Ceramic Artisan Mug</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-green-600 text-sm">🟢 4.9</span>
              <span className="text-gray-400 text-sm ml-2">(120 Reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl text-gray-800 mb-4">$24.00</p>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Handcrafted from premium ceramic, this minimalist mug is perfect for your morning brew. 
              Featuring a smooth, matte finish in soft pastel tones, it effortlessly complements any 
              modern kitchen aesthetic. Its ergonomic handle ensures a comfortable grip, while the 
              thick walls keep your beverage warm for longer. Microwave and dishwasher safe.
            </p>

            {/* Buttons */}
      <div className="space-y-2">
  <button className="w-full bg-sky-300 text-gray-900 py-2.5 text-sm rounded hover:bg-sky-400">
    Add to Cart
  </button>

  <button className="w-full bg-pink-100 text-gray-900 py-2.5 text-sm rounded hover:bg-pink-200">
    Ask AI about this item
  </button>
</div>



          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-12">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Customer Reviews</h2>
          
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-sm">Sarah Jenkins</h3>
                <span className="text-green-600 text-sm">5.0</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">2 weeks ago</p>
              <p className="text-sm text-gray-600">
                Absolutely love this mug! The color is exactly as pictured, a beautiful soft pastel.
              </p>
            </div>

            {/* Review 2 */}
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-sm">Michael T.</h3>
                <span className="text-green-600 text-sm">4.8</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">1 month ago</p>
              <p className="text-sm text-gray-600">
                Great quality ceramic. It holds heat really well compared to my other mugs.
              </p>
            </div>
          </div>
        </div>

     {/* Similar Items */}
<div className="mt-12">
  <h2 className="text-lg font-medium text-gray-800 mb-6">
    Similar items based on your taste
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {/* Item 1 */}
    <div className="border border-gray-100 p-3">
      <div className="w-full h-44 mb-2 overflow-hidden rounded-lg bg-gray-50">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/072/886/229/small/white-mug-on-pink-background-blank-coffee-cup-template-customizable-photo.jpg"
          alt="Mug"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium">Espresso Cup Duo</h3>
      <div className="flex items-center mt-1">
        <span className="text-green-600 text-xs">🟢 4.9</span>
        <span className="text-gray-400 text-xs ml-1">(210)</span>
      </div>
      <p className="text-sm font-medium mt-1">$28.00</p>
    </div>

    {/* Item 2 */}
    <div className="border border-gray-100 p-3">
      <div className="w-full h-44 mb-2 overflow-hidden rounded-lg bg-gray-50">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/072/886/229/small/white-mug-on-pink-background-blank-coffee-cup-template-customizable-photo.jpg"
          alt="Mug"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium">Espresso Cup Duo</h3>
      <div className="flex items-center mt-1">
        <span className="text-green-600 text-xs">🟢 4.9</span>
        <span className="text-gray-400 text-xs ml-1">(210)</span>
      </div>
      <p className="text-sm font-medium mt-1">$28.00</p>
    </div>
{/* Item 2 */}
    <div className="border border-gray-100 p-3">
      <div className="w-full h-44 mb-2 overflow-hidden rounded-lg bg-gray-50">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/072/886/229/small/white-mug-on-pink-background-blank-coffee-cup-template-customizable-photo.jpg"
          alt="Mug"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium">Espresso Cup Duo</h3>
      <div className="flex items-center mt-1">
        <span className="text-green-600 text-xs">🟢 4.9</span>
        <span className="text-gray-400 text-xs ml-1">(210)</span>
      </div>
      <p className="text-sm font-medium mt-1">$28.00</p>
    </div>
    {/* Item 3 */}
    <div className="border border-gray-100 p-3">
      <div className="w-full h-44 mb-2 overflow-hidden rounded-lg bg-gray-50">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/072/886/229/small/white-mug-on-pink-background-blank-coffee-cup-template-customizable-photo.jpg"
          alt="Precision Kettle"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-medium">Precision Gooseneck Kettle</h3>
      <div className="flex items-center mt-1">
        <span className="text-green-600 text-xs">🟢 4.7</span>
        <span className="text-gray-400 text-xs ml-1">(156)</span>
      </div>
      <p className="text-sm font-medium mt-1">$65.00</p>
    </div>

    {/* Add more items as needed */}
  </div>
</div>
</div>
      {/* Chat Assistant */}
      <div className="fixed bottom-4 right-4 w-72 bg-white rounded-lg shadow-lg border border-gray-100">
        <div className="p-3 border-b border-gray-100">
          <p className="text-sm text-gray-600">Shopping Assistant</p>
        </div>
        <div className="p-3 h-48 overflow-y-auto">
          <div className="bg-gray-50 rounded-lg p-2 mb-2 max-w-[80%]">
            <p className="text-xs text-gray-600">Hi there! Looking for anything specific today?</p>
          </div>
          <div className="bg-sky-400 text-gray-900 rounded-lg p-2 mb-2 ml-auto max-w-[80%]">
  <p className="text-xs">
    I need a gift for a coffee lover, under $50.
  </p>
</div>

          <div className="bg-gray-50 rounded-lg p-2 max-w-[80%]">
            <p className="text-xs text-gray-600">I can help with that! We have some great artisan mugs and premium beans. Want to see one?</p>
          </div>
        </div>
        <div className="p-3 border-t border-gray-100">
          <input type="text" placeholder="Type a message..." className="w-full text-xs p-2 border border-gray-200 rounded"/>
        </div>
      </div>
    </div>
    
  );
}