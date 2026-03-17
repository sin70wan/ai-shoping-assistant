import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Sample Product Card */}
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">Product Name</h3>
              <p className="text-gray-600 mt-1">$49.99</p>
              <Link 
                href={`/products/${item}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}