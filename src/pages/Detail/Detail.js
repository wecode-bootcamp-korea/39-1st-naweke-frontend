import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Detail.scss';
import DetailModal from './DetailModal';
import Right from './Right';

function Detail() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const basketAccess = () => {
    fetch('http://10.58.52.56:3000/ping', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const switchModal = () => {
    setIsOpenModal(prev => !prev);
  };
  return (
    <>
      <div className="Container">
        <div className="productContainer">
          <img className="productImg" src="images/nike.png" />
          <img className="productImg" src="images/nike.png" />
          <img className="productImg" src="images/nike.png" />
          <img className="productImg" src="images/nike.png" />
        </div>
        <Right switchModal={switchModal} basketAccess={basketAccess} />
        {isOpenModal && <DetailModal switchModal={switchModal} />}
      </div>
    </>
  );
}
export default Detail;
