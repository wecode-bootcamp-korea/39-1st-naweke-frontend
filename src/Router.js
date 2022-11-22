import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
// import Login from './pages/UserAccount/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
// import Basketball from './pages/Basketball/Basketball';
import Soccer from './pages/Soccer/Soccer';
import Running from './pages/Running/Running';
import Footer from './pages/Footer/Footer';
import SignUp from './pages/UserAccount/SignUp/SignUp';
import Login from './pages/UserAccount/Login/Login';

const Router = () => {
  const [isToken, setIsToken] = useState(false);
  return (
    <BrowserRouter>
      <Nav isToken={isToken} />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/product/:id" element={<Product />} /> */}
        {/* <Route path="/basketball" element={<Basketball />} /> */}
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/running" element={<Running />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
