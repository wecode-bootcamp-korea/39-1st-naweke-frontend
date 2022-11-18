import React from 'react';
import Filter from './Filter/Filter';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="mainWrap">
        <div className="mainSlogan">Feel The NAWEKE</div>
        <div className="mainBg">
          <div className="runBg">
            <img
              src="images/runningMain.png"
              alt="running"
              className="runningMain mainimg"
            />
          </div>
          <div className="runBg">
            <img
              src="images/soccer.png"
              alt="soccer"
              className="soccerMain mainimg"
            />
          </div>
          <div className="runBg">
            <img
              src="images/basketballMain.png"
              alt="basketball"
              className="basketballMain mainimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
