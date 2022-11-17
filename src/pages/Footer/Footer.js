import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footerInner">
        <div className="footerMenu">
          <div className="footerList">
            <h3>Product</h3>
            <ul>
              <li>Running</li>
              <li>Soccer</li>
              <li>Basketball</li>
            </ul>
          </div>
          <div className="footerList">
            <h3>Account</h3>
            <ul>
              <li>Login</li>
              <li>Join</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
        <div className="footerInfo">
          <div className="footerSearch">
            <h3>Search</h3>
            <input type="text" />
          </div>
          <div className="footerIcon">
            <ul>
              <li className="youtube">
                <img src="images/youtube.png" alt="youtube" />
              </li>
              <li className="instagram">
                <img src="images/instagram.png" alt="instagram" />
              </li>
              <li className="facebook">
                <img src="images/facebook.png" alt="facebook" />
              </li>
              <li className="twitter">
                <img src="images/twitter.png" alt="twitter" />
              </li>
            </ul>
          </div>
          <p className="license">
            (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
            멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
            통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068사업자
            정보 확인
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
