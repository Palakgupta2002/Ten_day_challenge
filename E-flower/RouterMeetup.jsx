// RouteMeetup.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import Home from './Home';
import Cart from './Cart';
import ProductPage from './ProductPage';

const RouteMeetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Home />
            </Layout>
          }
          path="/"
        />
        <Route
          element={
            <Layout>
              <Cart />
            </Layout>
          }
          path="/cart"
        />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMeetup;
