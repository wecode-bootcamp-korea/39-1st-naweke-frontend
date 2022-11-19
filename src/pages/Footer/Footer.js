import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const navigate = useNavigate();
  const FOOTER_LIST = [
    {
      id: 1,
      title: 'Product',
      list: ['Running', 'Soccer', 'Basketball'],
      url: ['/running', '/soccer', '/basketball'],
    },
    {
      id: 2,
      title: 'Account',
      list: ['Login', 'Join', 'Cart'],
      url: ['/login', '/signup', '/cart'],
    },
  ];

  const FOOTER_MEMBER = [
    {
      id: 1,
      name: '김한솔',
      img: 'images/man.png',
    },
    {
      id: 2,
      name: '김호준',
      img: 'images/man1.png',
    },
    {
      id: 3,
      name: '이명석',
      img: 'images/man2.png',
    },
    {
      id: 4,
      name: '조형진',
      img: 'images/man3.png',
    },
    {
      id: 5,
      name: '지송현',
      img: 'images/man4.png',
    },
    {
      id: 6,
      name: '홍석현',
      img: 'images/man5.png',
    },
    {
      id: 7,
      name: '박지영',
      img: 'images/girl.png',
    },
  ];

  return (
    <footer>
      <div className="footerInner">
        <div className="footerMenu">
          {FOOTER_LIST.map(({ id, title, list, url }) => {
            return (
              <div className="footerList" key={id}>
                <h3>{title}</h3>
                <ul>
                  {list.map(text => {
                    return (
                      <li key={text} onClick={() => navigate({ url })}>
                        {text}
                      </li>
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
