import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentProduct from './PaymentProduct';
import PayReview from './PayReview';
import { reviewData } from './data';

function Payment() {
  const [reviewArr, setReviewArr] = useState([]);
  const [review, setReview] = useState({});
  const [paymentData, setPaymentData] = useState([]);
  const accessToken = localStorage.getItem('token');
  // 주문내역 데이터
  const orderListFetch = () => {
    fetch('http://10.58.52.162:3000/orders', {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    })
      .then(response => response.json())
      .then(data => setPaymentData(data.orderList));
  };

  useEffect(() => {
    orderListFetch();
  }, [accessToken]);

  return (
    <div className="payment">
      <div className="paymentWrap">
        <h2>최근 주문내역</h2>
        <div className="paymentList">
          {paymentData.map((paylist, i) => {
            return (
              <PaymentProduct
                key={i}
                paylist={paylist}
                setReviewArr={setReviewArr}
                reviewArr={reviewArr}
                review={review}
                setReview={setReview}
                paymentData={paymentData}
              />
            );
          })}
          {/* <PaymentProduct setReviewArr={setReviewArr} reviewArr={reviewArr} /> */}
        </div>
      </div>
      <PayReview
        reviewArr={reviewArr}
        setReviewArr={setReviewArr}
        review={review}
        setReview={setReview}
      />
      <Link to="/" className="link">
        메인으로 이동
      </Link>
    </div>
  );
}

export default Payment;
