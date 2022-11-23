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
    fetch('http://10.58.52.132:3000/orders', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjo0LCJpYXQiOjE2NjkyMTA0MzYsImV4cCI6MTY3MTgwMjQzNiwiaXNzIjoiYWRtaW4iLCJzdWIiOiJhY2Nlc3NUb2tlbiJ9.vF3CttA8jRidyk35prgZG78D0a1NHHMIln9cuVYUVY0',
      },
    })
      .then(response => response.json())
      .then(data => setPaymentData(data.orderList));
  };
  // console.log(paymentData);

  useEffect(() => {
    // orderListFetch();
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
      <Link to="/main" className="link">
        메인으로 이동
      </Link>
    </div>
  );
}

export default Payment;
