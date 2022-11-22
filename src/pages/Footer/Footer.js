import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_LIST from './footerList';
import FOOTER_MEMBER from './footerMember';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footerInner">
        <div className="footerMenu">
          {FOOTER_LIST.map(({ id, title, list }) => {
            return (
              <div className="footerList" key={id}>
                <h3>{title}</h3>
                <ul>
                  {list.map(({ id, listTitle, path }) => {
                    return (
                      <Link to={path} key={id}>
                        <li>{listTitle}</li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footerInfo">
          <div className="footerDev">
            <h3>Developer</h3>
            <ul className="devEmail">
              {FOOTER_MEMBER.map(({ id, name, img }) => {
                return (
                  <li key={id}>
                    <img src={img} alt="member" />
                    {name}
                  </li>
                );
              })}
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
