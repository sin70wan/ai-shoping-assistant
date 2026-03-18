'use client';

import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-sky-500">
            AI Shopper
          </Link>

          {/* Search Bar - Small and Curved */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <Link href="/cart" className="relative p-2">
              <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Auth */}
            <Link
              href="/auth/login"
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-sky-500"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-3 py-1.5 text-sm bg-sky-500 text-white rounded-full hover:bg-sky-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}