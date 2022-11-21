import React from 'react';
import './Payment.scss';

function PaymentProduct({
  paylist: { totalPrice, orderId, orderProduct, createAt },
}) {
  return (
    <div className="paymentProduct">
      <div className="payProductInfo">
        <ul>
          <li>{createAt}</li>
          <li>총 주문 금액 {totalPrice} 원</li>
          <li>주문번호 : {orderId}</li>
        </ul>
      </div>
      {orderProduct.map(({ prdouctName, quantity, price }, i) => {
        return (
          <div className="payProductDetail" key={i}>
            <img src="/images/nike.png" alt="productImg" />
            <ul className="payDetail">
              <li>{prdouctName}</li>
              <li>{quantity}개</li>
              <li>{price}원</li>
            </ul>
            <ul className="shipment">
              <li>무료배송</li>
              <li>온라인 물류센터</li>
            </ul>
            <div className="payStatus">
              <span>결제완료</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentProduct;
