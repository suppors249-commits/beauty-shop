import { Link } from 'react-router';

import { ShoppingBag } from 'lucide-react';

import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newArrivals = products.filter(p => p.newArrival).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 h-[80vh] md:h-[90vh]">
  {/* الصورة الخلفية */}
  <img
    src="https://i.pinimg.com/736x/88/89/51/888951a067ca36d99b061dd1f7e0a157.jpg"
    alt="Natural Beauty"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay غامق خفيف */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* المحتوى */}
  <div className="relative max-w-7xl mx-auto flex items-center justify-center h-full">
    <div className="max-w-2xl text-center text-white">
      <div className="inline-flex items-center gap-2 bg-white/80 text-black px-4 py-2 rounded-full mb-6">
        
        <span className="text-sm text-primary">Dr Roaa Ibrahim Nourish</span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold mb-6 leading-tight">
        Discover Your
        <br />
       
      </h1>

      <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto">
        Premium cosmetics and skincare products crafted with love and the finest ingredients.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/shop"
          className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg inline-flex items-center gap-2 group"
        >
          Shop Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        
      </div>
    </div>
  </div>
</section>

      {/* Categories Preview */}
    <section className="py-12 md:py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-heading mb-3">Shop by Category</h2>
      <p className="text-muted-foreground">Find exactly what you're looking for</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* قسم العناية بالبشرة */}
      <Link
        to="shop"
        className="relative rounded-2xl overflow-hidden group hover:shadow-lg transition-all"
      >
        <img
          src="https://i.pinimg.com/1200x/06/4f/da/064fda29102943845e8bf2b31dded391.jpg" // حط رابط الصورة هنا
          alt="Skincare"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-2xl md:text-3xl font-semibold">
            العناية بالبشرة
          </h3>
        </div>
      </Link>

      {/* قسم العناية بالجسم */}
      <Link
        to="/shop"
        className="relative rounded-2xl overflow-hidden group hover:shadow-lg transition-all"
      >
        <img
          src="https://i.pinimg.com/736x/d8/76/f5/d876f515b9fdca9721332e608ab31efb.jpg" // حط رابط الصورة هنا
          alt="Bodycare"
          className="w-full h-54 object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-2xl md:text-3xl font-semibold">
            العناية بالجسم
          </h3>
        </div>
      </Link>
    </div>
  </div>
</section>

<section className="relative w-full h-[500px] overflow-hidden">
  {/* صورة الخلفية */}
  <img
    src="https://dr-roaa-product.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-at-2.21.28-PM.jpeg" // هنا حط رابط الصورة بدل رابط الفيديو
    alt="Background"
    className="w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

  {/* محتوى النصوص */}
  <div className="absolute bottom-10 left-10 md:left-20 text-white max-w-lg">
    
    <h2 className="text-3xl md:text-5xl font-bold mt-2">
      

At Dr Roaa Product,
    </h2>
    <p className="mt-2 text-base md:text-lg">
      Modern science and botanicals intertwine to strengthen the skin through time.
    </p>
    <a
      href="/shop"
      className="inline-block mt-4 px-6 py-3 border border-white font-semibold hover:bg-white hover:text-black transition"
    >
        new 
    </a>
  </div>
</section>

 <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Notable Formulations</h2>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-64 bg-[#f2f9f5] rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <a href="/shop" className="w-full">
              <img
                src={product.image} // الصورة لكل منتج
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
            </a>

            <div className="flex items-center justify-between p-3">
              {/* <h3 className="text-lg font-semibold text-center mb-1">
                {product.name}
              </h3> */}

              
            </div>
          </div>
        ))}
      </div>
    </section>



      {/* Featured Products */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our handpicked favorites</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link
            to="/shop"
            className="md:hidden mt-6 w-full bg-primary text-white py-3 rounded-full text-center inline-flex items-center justify-center gap-2"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4">
  <div className="max-w-sm mx-auto">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-semibold text-center p-4">
        Find Us Here
      </h2>
      <div className="w-full h-64">
        <iframe
          title="Google Map for Brainstorm Force"
          src="https://maps.google.com/maps?q=Brainstorm%20Force&z=12&hl=en&t=m&output=embed&iwloc=near"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-b-2xl"
        ></iframe>
      </div>
    </div>
  </div>
</section>

      {/* Newsletter Section */}
      <section
  className="py-16 md:py-20 px-4 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://www.aesop.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-aesop-us-Library/default/dw9fdef59f/Aesop_Category_Page_Skin_Care_Primary_Mobile_1088x1088px_V2.jpg?sw=640&sh=640&sm=cut&q=70')",
  }}
>
  <div className="max-w-3xl mx-auto text-center bg-black/40 p-8 rounded-xl">
    <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
      Join Our Beauty Community
    </h2>
    <p className="text-white/90 mb-8 text-lg">
      Subscribe to get special offers, beauty tips, and new product updates
    </p>
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-6 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button className="bg-white text-primary px-8 py-3.5 rounded-full hover:bg-white/90 transition-all whitespace-nowrap">
        Subscribe
      </button>
    </div>
  </div>
</section>
    </div>
  );
}
