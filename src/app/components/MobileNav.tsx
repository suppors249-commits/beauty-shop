import { Link, useLocation } from 'react-router';
import { Home, Grid3x3, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function MobileNav() {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'shop', path: '/shop', icon: Grid3x3 },
    { name: 'Cart', path: '/cart', icon: ShoppingBag, badge: totalItems },
    { name: 'About', path: '/About', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#f2f9f5] border-t border-border z-50 md:hidden">
      <div className="flex items-center justify-around px-1 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'text-primary bg-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="relative">
                <Icon className="w-6 h-6" />
                
                {/* Badge for Cart */}
                {item.name === 'Cart' && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </div>
              {/* <span className="text-xs mt-1">{item.name}</span> */}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}