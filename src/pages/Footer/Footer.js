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
          <div className="footerDev">
            <h3>Developer</h3>
            <ul className="devEmail">
              <li>
                <img src="images/man.png" alt="man" />
                김한솔
              </li>
              <li>
                <img src="images/man1.png" alt="man" />
                김호준
              </li>
              <li>
                <img src="images/man2.png" alt="man" />
                이명석
              </li>
              <li>
                <img src="images/man3.png" alt="man" />
                조형진
              </li>
              <li>
                <img src="images/man4.png" alt="man" />
                지송현
              </li>
              <li>
                <img src="images/man5.png" alt="man" />
                홍석현
              </li>
              <li>
                <img src="images/girl.png" alt="girl" />
                박지영
              </li>
            </ul>
          </div>

          <p className="license">
            (위)나위키코리아 대표 무 | 서울 강남구 테헤란로 427 위워크타워 10층
            | 통신판매업신고번호 00000000 | 등록번호 사업자 정보 확인
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
