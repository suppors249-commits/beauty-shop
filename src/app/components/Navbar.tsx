import { Link } from 'react-router';

import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

export function Navbar() {
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const totalItems = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-18 md:h-20">   
         <Link
        to="/"
        className="text-4xl font-light tracking-[1.0px] max-sm:text-3xl max-[400px]:text-2xl"
      >
        Dr.<span className="text-[#6b1727]">ROAA</span>
      </Link>
        </div>
      </div>
    </nav>
  );
}
