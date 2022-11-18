import React from 'react';
import { Link } from 'react-router-dom';
// import './Payment.scss';
import PaymentProduct from './PaymentProduct';

function Payment() {
  return (
    <div className="payment">
      <div className="paymentWrap">
        <h2>최근 주문내역</h2>
        <div className="paymentList">
          {/* 컴포넌트 */}
          <div className="paymentProduct">
            <div className="payProductInfo">
              <ul>
                <li>2022.11.18</li>
                <li>총 주문 금액 price 원</li>
                <li>주문번호 : id</li>
              </ul>
            </div>
            <div className="payProductDetail">
              <img src="/images/nike.png" alt="productImg" />
              <ul className="payDetail">
                <li>name</li>
                <li>num개</li>
                <li>price원</li>
              </ul>
              <ul className="shipment">
                <li>무료배송</li>
                <li>온라인 물류센터</li>
              </ul>
              <div className="payStatus">
                <span>결제완료</span>
              </div>
            </div>
          </div>
          <PaymentProduct />
        </div>
        <Link to="/main" className="link">
          메인으로 이동
        </Link>
      </div>
    </div>
  );
}

export default Payment;
