import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Detail.scss';
import DetailModal from './DetailModal';
import Right from './Right';
import Left from './Left';

function Detail() {
  // useEffect(() => {
  //   console.log('effect');
  // });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const switchModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const basketAccess = () => {
    fetch('http://10.58.52.56:3000/Carts', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: '1',
        sizeId: '10',
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const detailImgAccess = () => {
    fetch('10.58.52.132:3000/products/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="detail">
      <Left />

      <Right switchModal={switchModal} basketAccess={basketAccess} />
      {isOpenModal && <DetailModal switchModal={switchModal} />}
    </div>
  );
}
export default Detail;
