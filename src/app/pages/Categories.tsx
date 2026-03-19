import { Link } from 'react-router';
import { categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

export function Categories() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading mb-4">Shop by Category</h1>
          <p className="text-muted-foreground text-lg">
            Explore our curated collection of premium beauty products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.name}`}
              className="group bg-white rounded-3xl p-8 md:p-10 text-center hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary"
            >
              <div className="text-6xl md:text-7xl mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h2 className="text-2xl font-heading mb-3 group-hover:text-primary transition-colors">
                {category.name}
              </h2>
              <p className="text-muted-foreground mb-6">
                Discover our premium {category.name.toLowerCase()} collection
              </p>
              <div className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
