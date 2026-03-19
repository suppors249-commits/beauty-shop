import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter } from 'lucide-react';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  let filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="relative mb-8 rounded-2xl overflow-hidden">

  {/* الصورة */}
  <img
    src="https://www.aesop.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-aesop-us-Library/default/dw9fdef59f/Aesop_Category_Page_Skin_Care_Primary_Mobile_1088x1088px_V2.jpg?sw=640&sh=640&sm=cut&q=70"
    alt="Skin Care"
    className="w-full h-40 md:h-50 object-cover"
  />

  {/* طبقة غامقة خفيفة */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* النص */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
      Skin Care
    </h1>
  </div>

</div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          
          <div className="bg-white rounded-2xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-foreground hover:bg-accent'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.name
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-foreground hover:bg-accent'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="bg-white rounded-2xl p-4 border border-border">
            {/* <h3 className="font-medium mb-3">Sort by</h3> */}
           
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
