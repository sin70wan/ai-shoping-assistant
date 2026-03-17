import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    { name: 'Electronics', count: 45 },
    { name: 'Clothing', count: 120 },
    { name: 'Home & Garden', count: 78 },
    { name: 'Sports', count: 34 },
    { name: 'Books', count: 56 },
    { name: 'Toys', count: 23 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.name}
            href={`/categories/${category.name.toLowerCase()}`}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600">{category.count} products</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
