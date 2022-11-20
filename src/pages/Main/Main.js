import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

function Main() {
  const navigate = useNavigate();
  const MAIN_DATA = [
    {
      id: 1,
      title: 'running',
      src: 'images/mainpage1.png',
      slogan: '더 빨리.',
      text: `도로부터 트랙까지, 맑은 날부터 궃은 날까지 언제 어디서나 든든한 러닝 파트너 나위키를 경험해 보세요`,
      button: '러닝 테마 보러가기',
    },
    {
      id: 2,
      title: 'soccer',
      src: 'images/mainpage2.png',
      slogan: '더 과감하게.',
      text: `스피드, 기술 그리고 터치가 연결될 때 느껴지는 짜릿함.
      더욱 업그레이드 된 나위키를 만나보세요.`,
      button: '축구 테마 보러가기',
    },
    {
      id: 3,
      title: 'basketball',
      src: 'images/mainpage3.png',
      slogan: '더 높게.',
      text: `빠른 방향 전환과 안정적인 지지력을 선사하는 디자인으로 진정한 플레이 메이커가 되어보세요.`,
      button: '농구 테마 보러가기',
    },
  ];
  return (
    <div className="main">
      <div className="mainWrap">
        <div className="mainSlogan">
          <img src="images/mainslogan.png" alt="mainslogan" />
        </div>
        <div className="mainBg">
          {MAIN_DATA.map(({ id, title, src, slogan, text, button, url }) => {
            return (
              <div key={id} className={`${title}Wrap mainCon`}>
                <div className={`${title}Bg`}>
                  <img
                    src={src}
                    alt={title}
                    className={`${title}Main mainimg`}
                  />
                </div>
                <div className="mainText">
                  <h3>{slogan}</h3>
                  <p>{text}</p>
                  <button
                    type="button"
                    className="moveBtn"
                    onClick={() => {
                      navigate({ url });
                    }}
                  >
                    {button}&raquo;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mainMsg">
          <img src="images/mainmsg.png" alt="mainmsg" />
        </div>
      </div>
    </div>
  );
}

export default Main;
