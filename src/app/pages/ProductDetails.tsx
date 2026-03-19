import { useParams, Link } from 'react-router';
import { ShoppingBag, Heart, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading mb-4">Product not found</h2>
          <Link to="/shop" className="text-primary hover:underline">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to shop
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-lg">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.newArrival && (
                <span className="bg-primary text-white text-sm px-4 py-1.5 rounded-full">
                  New Arrival
                </span>
              )}
              {product.featured && (
                <span className="bg-accent text-primary text-sm px-4 py-1.5 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-heading mb-4">{product.name}</h1>
            <p className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="bg-secondary rounded-2xl p-6 mb-8">
              <h3 className="font-heading text-lg mb-4">Product Details</h3>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full border border-border hover:border-primary transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full border border-border hover:border-primary transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-white py-4 rounded-full hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                {isAdded ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button className="sm:w-auto px-8 py-4 rounded-full border border-border hover:border-primary transition-colors inline-flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="sm:hidden">Wishlist</span>
              </button>
            </div>

            {isAdded && (
              <div className="mt-4 bg-accent border border-primary/20 rounded-xl p-4 text-center">
                <p className="text-primary">
                  ✓ {quantity} {quantity === 1 ? 'item' : 'items'} added to your cart
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
