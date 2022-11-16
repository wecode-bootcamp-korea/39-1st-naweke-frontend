import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <>
      <div className="signBar" onMouseEnter={() => setIsSubMenuOpen(false)}>
        <p>Help</p>
        <p>Order Check</p>
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
        <ul className="navMain" onMouseEnter={() => setIsSubMenuOpen(true)}>
          <Link to="/running">
            <li>Running</li>
          </Link>

          <Link to="/soccer">
            <li>Soccer</li>
          </Link>

          <Link to="/basketball">
            <li>Basketball</li>
          </Link>
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
      {isSubMenuOpen && (
        <div
          className="navUnder"
          onMouseLeave={() => setIsSubMenuOpen(false)}
          // style={{ visibility: navLink }}
        >
          <ul className="navUnderInRun">
            <li>신발</li>
            <li>의류</li>
            <li>모자&용품</li>
            <li>전체보기</li>
          </ul>
          <ul className="navUnderInSoccer">
            <li>축구화</li>
            <li>의류</li>
            <li>팀 컬렉션</li>
            <li>전체보기</li>
          </ul>
          <ul className="navUnderInBasket">
            <li>신발</li>
            <li>의류</li>
            <li>NBA</li>
            <li>용품</li>
            <li>전체보기</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
