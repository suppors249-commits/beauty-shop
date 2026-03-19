import { Link } from 'react-router';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
         
         
        </div>

        {/* Add to Cart Button - Desktop Hover */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hidden md:flex items-center gap-2 whitespace-nowrap"
        >
          <ShoppingBag className="w-4 h-4" />
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* <p className="text-xs text-muted-foreground mb-1">{product.category}</p> */}
        <h3 className="font-heading text-base mb-2 text-foreground line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
          {/* Mobile Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="md:hidden bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
