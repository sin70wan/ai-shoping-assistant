'use client';

import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'home', name: 'Home & Garden' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
    // Here you would typically navigate to search results page
    // router.push(`/search?q=${searchQuery}&category=${selectedCategory}`);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 md:py-0 md:h-20">
          {/* Top Row: Logo and Icons (mobile) */}
          <div className="flex justify-between items-center md:hidden mb-3">
            <Link href="/" className="text-2xl font-bold text-sky-400">
              AI Shopper
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-blue-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 w-full">
            {/* Logo - Desktop */}
            <Link href="/" className="hidden md:block text-2xl font-bold text-sky-400 whitespace-nowrap">
              AI Shopper
            </Link>

            {/* Search Bar - Main Feature */}
            <form onSubmit={handleSearch} className="flex-1 max-w-3xl mx-auto md:mx-4 w-full">
              <div className={`
                flex items-center border-2 rounded-lg overflow-hidden transition-all duration-200
                ${isSearchFocused ? 'border-sky-400 shadow-lg' : 'border-gray-200 hover:border-gray-300'}
              `}>
                {/* Category Dropdown */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2.5 bg-gray-50 text-sm text-gray-700 border-r border-gray-200 focus:outline-none cursor-pointer hover:bg-gray-100 transition"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search for products, brands, and more..."
                  className="flex-1 px-4 py-2.5 text-sm focus:outline-none"
                />

                {/* Search Button */}
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-sky-400 text-white hover:bg-sky-500 transition flex items-center"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span className="ml-2 hidden sm:inline">Search</span>
                </button>
              </div>

              {/* Quick Category Filters (below search on mobile, inline on desktop) */}
              <div className="flex flex-wrap gap-2 mt-2 md:hidden">
                {categories.slice(1, 5).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      px-3 py-1 text-xs rounded-full transition
                      ${selectedCategory === category.id
                        ? 'bg-sky-400 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }
                    `}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </form>

            {/* Right side - Desktop Icons and Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart Icon */}
              <Link href="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-blue-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-sm text-sky-400 hover:text-sky-500"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm bg-sky-400 text-white rounded-lg hover:bg-sky-500"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}