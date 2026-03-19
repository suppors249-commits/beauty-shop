import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { ScrollToTop } from './ScrollToTop';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border mt-auto hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <span className="text-2xl font-heading font-semibold">Beauté</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Premium cosmetics and skincare products for your natural beauty.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-heading text-lg mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
                <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link></li>
                <li><Link to="/shop?filter=new" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
                <li><Link to="/shop?filter=featured" className="text-muted-foreground hover:text-primary transition-colors">Featured</Link></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-heading text-lg mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-heading text-lg mb-4">Stay Updated</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to get special offers and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
                <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Beauté. All rights reserved. Made with ❤️ for beauty lovers.</p>
          </div>
        </div>
      </footer>

      <MobileNav />
    </div>
  );
}