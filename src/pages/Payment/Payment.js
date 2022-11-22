import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentProduct from './PaymentProduct';
import PayReview from './PayReview';

function Payment() {
  const [paymentData, setPaymentData] = useState([]);
  const accessToken = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://10.58.52.132:3000/orders', {
      method: 'GET',
      headers: { Authorization: accessToken },
    })
      .then(response => response.json())
      .then(data => setPaymentData(data.orderList));
  }, [accessToken]);

  return (
    <div className="payment">
      <div className="paymentWrap">
        <h2>최근 주문내역</h2>
        <div className="paymentList">
          {paymentData.map((paylist, i) => {
            return <PaymentProduct key={i} paylist={paylist} />;
          })}
        </div>
        <Link to="/main" className="link">
          메인으로 이동
        </Link>
      </div>
      <PayReview />
    </div>
  );
}

export default Payment;
