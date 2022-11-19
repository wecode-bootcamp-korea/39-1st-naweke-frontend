import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchId from './FindProduct';
import SearchIdLeft from './FinProductLeft';
import './Nav.scss';

function Nav() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

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
        <div className="navLogo" onMouseEnter={() => setIsSubMenuOpen(false)}>
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
        <div className="navRight" onMouseEnter={() => setIsSubMenuOpen(false)}>
          <div className="searchArea" onClick={() => setIsSearchBoxOpen(true)}>
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
      {isSearchBoxOpen && (
        <div className="searchBox">
          <div className="searchBoxIn">
            <div className="navLogo">
              <Link to="/main">
                <img
                  alt="logo"
                  src="images/nike.png"
                  onClick={() => setIsSearchBoxOpen(false)}
                />
              </Link>
            </div>
            <div className="searchMain">
              <div className="magnifyimg">
                <img
                  alt="searchimg"
                  src="images/magnifying-glass.png"
                  onClick={() => setIsSearchBoxOpen(false)}
                />
              </div>
              <input
                type="text"
                placeholder="search"
                id="searchInput"
                onChange={e => {
                  setSearchInput(e.target.value);
                }}
              />
              <SearchIdLeft searchInput={searchInput} />
              <SearchId searchInput={searchInput} />
            </div>
            <div className="closeBox">
              <p onClick={() => setIsSearchBoxOpen(false)}>취소</p>
            </div>
          </div>
          <div className="popularSearchBox">
            <ul className="popularSearch">
              <p>인기검색어</p>
              <li>축구화</li>
              <li>농구화</li>
              <li>런닝화</li>
              <li>경량 운동화</li>
            </ul>
          </div>
        </div>
      )}
      {isSubMenuOpen && (
        <div className="navUnder" onMouseLeave={() => setIsSubMenuOpen(false)}>
          <ul>
            <li>신발</li>
            <li>의류</li>
            <li>모자&용품</li>
            <li>전체보기</li>
          </ul>
          <ul>
            <li>축구화</li>
            <li>의류</li>
            <li>팀 컬렉션</li>
            <li>전체보기</li>
          </ul>
          <ul>
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
