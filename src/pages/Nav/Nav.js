import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './Navlist';
import FindProductLeft from './FindProductLeft';
import FindProduct from './FindProduct';
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
      <div
        className="signBar"
        // isToken={isToken}
        onMouseEnter={() => setIsSubMenuOpen(false)}
      >
        <p>Help</p>
        <p>Order Check</p>
        <p>
          <Link to="/signup">Logout</Link>
        </p>
        <p>
          <Link to="/login">안녕하세요 회원님!</Link>
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
              <FindProduct searchInput={searchInput} />
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
          {NAV_LIST.map(nav => {
            return (
              <ul key={nav.id}>
                <li key={nav.list.id}>
                  <a href={nav.list.path}>{nav.list.name}</a>
                </li>
              </ul>
            );
          })}
          {/* <ul>
            <Link to="/running?mainCategory=shoes&subCategory=running">
              <li>신발</li>
            </Link>
            <Link to="/running?mainCategory=clothes&subCategory=running">
              <li>의류</li>
            </Link>
            <Link to="/running?mainCategory=accessories&subCategory=running">
              <li>모자&용품</li>
            </Link>
            <Link to="/running">
              <li>Running</li>
            </Link>
          </ul>
          <ul>
            <Link to="/soccer?mainCategory=shoes&subCategory=soccer">
              <li>축구화</li>
            </Link>
            <Link to="/soccer?mainCategory=clothes&subCategory=soccer">
              <li>의류</li>
            </Link>
            <Link to="/soccer?mainCategory=teamcollection&subCategory=soccer">
              <li>팀컬렉션</li>
            </Link>
            <Link to="/soccer">
              <li>전체보기</li>
            </Link>
          </ul>
          <ul>
            <Link to="/basketball?mainCategory=shoes&subCategory=basketball">
              <li>신발</li>
            </Link>
            <Link to="/basketball?mainCategory=clothes&subCategory=basketball">
              <li>의류</li>
            </Link>
            <Link to="/basketball?mainCategory=teamcollection&subCategory=basketball">
              <li>NBA</li>
            </Link>
            <Link to="/basketball?mainCategory=accessories&subCategory=basketball">
              <li>용품</li>
            </Link>
            <Link to="/basketball">
              <li>전체보기</li>
            </Link>
          </ul> */}
        </div>
      )}
    </>
  );
}

export default Nav;
