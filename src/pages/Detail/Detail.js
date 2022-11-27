import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.scss';
import DetailModal from './DetailModal';
import Right from './Right';
import Left from './Left';
import Review from './Review';
import SIZE_LIST from './SIZE_LIST';

function Detail() {
  const accessToken = localStorage.getItem('token');
  const [detailData, setDetailData] = useState([]);
  const [size, setSize] = useState(0);

  const params = useParams();
  useEffect(() => {
    fetch(`http://10.58.52.162:3000/products/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: accessToken,
      },
    })
      .then(response => response.json())
      .then(data => setDetailData(data));
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const switchModal = () => {
    setIsOpenModal(prev => !prev);
  };

  // const buyAccess = () => {
  //   fetch('http://10.58.52.162:3000/orders', {
  //     method: 'POST',
  //     headers: {
  //       'content-Type': 'application/json;charset=utf-8',
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxOSwiaWF0IjoxNjY5MTgxMzQ1LCJleHAiOjE2NzE3NzMzNDUsImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.dvHAlqCKLEpOa1sF_u-V0xp1qnswG_NeocDzJ31ioKo',
  //     },
  //     body: JSON.stringify({
  //       totalPrice: '',
  //       orderItems: [
  //         {
  //           productOptionId: '',
  //           quantity: '',
  //         },
  //       ],
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(detailData));
  // };

  // const detailImgAccess = () => {
  //   fetch('http://10.58.52.132:3000/products/1', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // };

  if (!detailData.productInfo) return null;

  return (
    <div className="detail">
      <Left detailData={detailData} />

      <Right
        setSize={setSize}
        switchModal={switchModal}
        // basketAccess={basketAccess}
        detailData={detailData}
      />

      {isOpenModal && <DetailModal switchModal={switchModal} />}
    </div>
  );
}
export default Detail;
