import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';
import Basketball from './pages/Basketball/Basketball';
import Soccer from './pages/Soccer/Soccer';
import Running from './pages/Running/Running';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/Running" element={<Running />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
