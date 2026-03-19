import { User, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router';

export function Account() {
  const menuItems = [
    {
      icon: User,
      title: 'Profile',
      description: 'Manage your personal information',
      link: '#'
    },
    {
      icon: ShoppingBag,
      title: 'Orders',
      description: 'View your order history',
      link: '#'
    },
    {
      icon: Heart,
      title: 'Wishlist',
      description: 'Your saved products',
      link: '#'
    },
    {
      icon: Settings,
      title: 'Settings',
      description: 'Account preferences',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading mb-2">My Account</h1>
              <p className="opacity-90">Manage your beauty journey</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center border border-border">
            <p className="text-3xl font-heading text-primary mb-1">0</p>
            <p className="text-sm text-muted-foreground">Orders</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-border">
            <p className="text-3xl font-heading text-primary mb-1">0</p>
            <p className="text-sm text-muted-foreground">Wishlist</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-border">
            <p className="text-3xl font-heading text-primary mb-1">$0</p>
            <p className="text-sm text-muted-foreground">Spent</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 mb-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Sign Out */}
        <button className="w-full bg-white border border-border rounded-2xl p-6 hover:bg-destructive/5 hover:border-destructive transition-all flex items-center justify-center gap-3 text-destructive">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>

        {/* Need Help */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Need assistance?</p>
          <Link
            to="/contact"
            className="text-primary hover:underline"
          >
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}
