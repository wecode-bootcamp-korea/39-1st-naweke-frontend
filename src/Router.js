import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import Login from './pages/UserAccount/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Mainthema from './pages/Mainthema/Mainthema';
import Footer from './pages/Footer/Footer';
import SignUp from './pages/UserAccount/SignUp/SignUp';
import Productdetail from './pages/Productdetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<Productdetail />} />
        <Route path="/products" element={<Mainthema />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
