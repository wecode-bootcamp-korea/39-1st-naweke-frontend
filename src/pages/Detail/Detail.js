import React, { useState } from 'react';
import './Detail.scss';
import DetailModal from './DetailModal';
import Right from './Right';

function Detail() {
  let [modal, setModal] = useState(false);
  return (
    <>
      <div className="Container">
        <div className="productContainer">
          <img className="productImg" src="images/nike.png" />
          <img className="productImg" src="images/nike.png" />
          <img className="productImg" src="images/nike.png" />
          <img className="productImg" src="images/nike.png" />
        </div>
        <Right />
        <DetailModal />
      </div>
    </>
  );
}
export default Detail;
