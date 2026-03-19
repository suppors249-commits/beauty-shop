import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl md:text-9xl font-heading text-primary/20 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-heading mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3.5 rounded-full hover:bg-secondary transition-all"
          >
            <Search className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
