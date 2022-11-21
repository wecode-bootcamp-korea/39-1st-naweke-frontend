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
      <div className="review">
        <div className="reviewContainer">
          <h3>리뷰 작성하기</h3>
          <input type="text" className="reviewTitle" placeholder="제목" />
          <div className="reviewVal">
            <span>
              평점
              <select className="reviewSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </span>
            <span>날짜</span>
          </div>
          <input
            type="text"
            className="reviewInput"
            placeholder="리뷰를 작성하세요"
          />
          <button className="reviewBtn">작성하기</button>
        </div>
        <div className="showReview">
          <h3>작성된 리뷰</h3>
          <div className="postReview">
            <span>리뷰제목</span>
            <ul className="reviewInfo">
              <li>평점</li>
              <li>날짜</li>
            </ul>
            <p className="reviewDetail">작성된 리뷰가 없습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
