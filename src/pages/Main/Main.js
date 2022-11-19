import React from 'react';
// import Filter from './Filter/Filter';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="mainWrap">
        <div className="mainSlogan">
          <img src="images/mainslogan.png" alt="mainslogan" />
        </div>
        <div className="mainBg">
          <div className="runningWrap mainCon">
            <div className="runBg">
              <img
                src="images/runningMain.png"
                alt="running"
                className="runningMain mainimg"
              />
            </div>
            <div className="runningText">더 빨리</div>
          </div>

          <div className="soccerWrap mainCon">
            <div className="soccerBg">
              <img
                src="images/soccer.png"
                alt="soccer"
                className="soccerMain mainimg"
              />
            </div>
            <div className="soccerText">더 과감하게</div>
          </div>

          <div className="basketballWrap mainCon">
            <div className="basketballBg">
              <img
                src="images/basketballMain.png"
                alt="basketball"
                className="basketballMain mainimg"
              />
            </div>
            <div className="basketballText">더 높게</div>
          </div>
        </div>
        <div className="mainMsg">
          <img src="images/mainmsg.png" alt="mainmsg" />
        </div>
      </div>
    </div>
  );
}

export default Main;
