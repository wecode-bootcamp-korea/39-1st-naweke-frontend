import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div className="signBar">
        <p>Find a Store</p>
        <p>Help</p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="navBox">
        <div className="navLogo">
          <Link to="/main">
            <img alt="logo" src="images/nike.png" />
          </Link>
        </div>
        <ul className="navMain">
          <li>Running</li>
          <li>Soccer</li>
          <li>Basketball</li>
        </ul>
        <div className="navRight">
          <div className="searchArea">
            <div className="magnifyimg">
              <img alt="searchimg" src="images/magnifying-glass.png" />
            </div>
            <input className="searchInput" placeholder="Search" type="text" />
          </div>
          <div className="likeObj">
            <img alt="likeObj" src="images/heart.png" />
          </div>
          <div className="likeObj">
            <Link to="/cart">
              <img alt="cart" src="images/shopping-cart.png" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
