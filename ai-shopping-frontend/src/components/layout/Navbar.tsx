'use client';

import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
         <Link
  href="/"
  className="text-2xl font-bold text-sky-400"
>
  AI Shopper
</Link>


          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600">
              Categories
            </Link>
          </div>

          {/* Right side - Cart and Auth buttons */}
          <div className="flex items-center space-x-4">
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
    </nav>
  );
}