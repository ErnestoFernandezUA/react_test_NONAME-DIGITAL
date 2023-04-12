import { createBrowserRouter } from 'react-router-dom';

import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { BasketPage } from './pages/BasketPage';
import { ProductPage } from './pages/ProductPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { App } from './components/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    id: 'root',
    children: [
      {
        path: '/',
        element: <HomePage />,
        id: 'homePage',
        errorElement: <>Error on HomePage</>,
      },
      {
        path: '/login',
        element: <LoginPage />,
        id: 'login',
        errorElement: <>Error on Login</>,
      },
      {
        path: '/register',
        element: <RegisterPage />,
        id: 'register',
        errorElement: <>Error on Register</>,
      },
      {
        path: '/basket',
        element: <BasketPage />,
        id: 'basketPage',
        errorElement: <>Error on BasketPage</>,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
        errorElement: <>Error on ProductPage</>,
      },
    ],
  },
]);
