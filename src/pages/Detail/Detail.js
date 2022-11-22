import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Detail.scss';
import DetailModal from './DetailModal';
import Right from './Right';
import Left from './Left';

function Detail() {
  const [detailData, setDetailData] = useState([]);

  // useEffect(() => {
  //   fetch('http://10.58.52.132:3000/products/1', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => setDetailData(data));
  // }, []);

  // console.log(detailData);

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
      .then(data => setDetailData(data));
  };

  const detailImgAccess = () => {
    fetch('http://10.58.52.132:3000/products/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // console.log(detailData);
  // if (!detailData.productInfo) return null;

  return (
    <div className="detail">
      <Left detailData={detailData} />

      <Right
        switchModal={switchModal}
        basketAccess={basketAccess}
        detailData={detailData}
      />
      {isOpenModal && <DetailModal switchModal={switchModal} />}
    </div>
  );
}
export default Detail;
