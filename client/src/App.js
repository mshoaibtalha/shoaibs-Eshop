import './App.scss';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Product } from './pages/Product/Product';
import { Products } from './pages/Products/Products';
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

const Layout = () => {
  return (
    <dir>
      <Navbar />
      <Outlet />
      <Footer />
    </dir>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
