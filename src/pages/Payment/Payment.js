import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentProduct from './PaymentProduct';

function Payment() {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch('http')
      .then(response => response.json())
      .then(data => setPaymentData(data));
  }, []);

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
    </div>
  );
}

export default Payment;
