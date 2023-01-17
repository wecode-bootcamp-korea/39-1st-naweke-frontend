import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentProduct from './PaymentProduct';
import PayReview from './PayReview';
import { APIS } from '../../config';

function Payment() {
  const [reviewArr, setReviewArr] = useState([]);
  const [review, setReview] = useState({});
  const [paymentData, setPaymentData] = useState([]);
  const [controlReview, setControlReview] = useState(false);
  const accessToken = localStorage.getItem('token');

  // 주문내역 데이터
  const orderListFetch = () => {
    fetch(`${APIS.orders}`, {
      // fetch('/data/Order.json', {
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
        <h2 className="paymentOrder">최근 주문내역</h2>
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
                controlReview={controlReview}
                setControlReview={setControlReview}
              />
            );
          })}
        </div>
        <div />
      </div>
      <PayReview
        reviewArr={reviewArr}
        setReviewArr={setReviewArr}
        review={review}
        setReview={setReview}
        controlReview={controlReview}
        setControlReview={setControlReview}
      />
      <Link to="/" className="link">
        메인으로 이동
      </Link>
    </div>
  );
}

export default Payment;
