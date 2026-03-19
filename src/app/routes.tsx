import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Categories } from './pages/Categories';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Account } from './pages/Account';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'shop', Component: Shop },
      { path: 'product/:id', Component: ProductDetails },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'categories', Component: Categories },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'account', Component: Account },
      { path: '*', Component: NotFound }
    ]
  }
]);