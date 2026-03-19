import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { CheckCircle } from 'lucide-react';

export function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });

  const totalPrice = getTotalPrice();

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-heading mb-4">Order Placed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. We'll contact you shortly to confirm your delivery details.
          </p>
          <div className="bg-accent rounded-2xl p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Order Total</p>
            <p className="text-3xl font-heading text-primary">${totalPrice.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mt-4">Cash on Delivery</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-heading mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-heading mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your email (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-heading mb-6">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your street address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="City"
                    />
                  </div>
                  
                </div>
                <div>
                  <label className="block text-sm mb-2">Order Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Any special instructions..."
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-heading mb-4">Payment Method</h2>
              <div className="bg-accent rounded-xl p-4 border border-primary/20">
                <p className="font-medium text-primary"> Cash on Delivery</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Pay with cash when your order is delivered to your doorstep.
                </p>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-primary text-white py-4 rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing Order...' : 'Place Order'}
            </button>
          </form>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-border sticky top-24">
              <h2 className="text-xl font-heading mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border my-4" />
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-primary">Free</span>
                </div>
              </div>

              <div className="h-px bg-border my-4" />
              
              <div className="flex justify-between text-lg">
                <span className="font-heading">Total</span>
                <span className="font-heading text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
