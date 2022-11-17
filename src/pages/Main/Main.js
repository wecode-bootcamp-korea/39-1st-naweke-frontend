import React from 'react';
import Filter from './Filter/Filter';
import './Main.scss';
import './Filter/Filter.scss';

function Main() {
  return (
    <>
      <img src="images/mainImg.PNG" alt="mainImg" className="mainImg" />
      <div className="main">
        <Filter />
      </div>
    </>
  );
}

export default Main;
