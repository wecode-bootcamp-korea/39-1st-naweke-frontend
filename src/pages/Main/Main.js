import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MAIN_DATA from './mainData.js';
import './Main.scss';

function Main() {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState([]);

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
                  <Link to={url}>
                    <button type="button" className="moveBtn">
                      {button}&nbsp;&raquo;
                    </button>
                  </Link>
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
