import React, { useEffect, useState } from 'react';
import Review from './Review';
import { APIS } from '../../config';
import './Payment.scss';
import './PaymentProduct.scss';

function PaymentProduct({
  review,
  setReview,
  setReviewArr,
  reviewArr,
  paymentData,
  paylist: { totalPrice, orderId, orderProduct, createAt },
  setControlReview,
  controlReview,
}) {
  const [reviewModal, setReviewModal] = useState(false);
  const token = localStorage.getItem('token');

  const newReview = e => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };
  // 새로운 리뷰 추가
  const pushReview = () => {
    let copyReviewArr = reviewArr.concat(review);
    setReviewArr(copyReviewArr);
  };

  const showReview = () => {
    fetch(`${APIS.review}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => setReviewArr(data.reviewData));
  };
  useEffect(() => {
    showReview();
  }, [reviewArr]);
  return (
    <div className="paymentProduct">
      <div className="payProductInfo">
        <ul>
          <li>{createAt}</li>
          <li>총 주문 금액 {totalPrice.toLocaleString()} 원</li>
          <li>주문번호 : {orderId}</li>
        </ul>
      </div>
      {orderProduct.map(
        ({ thumbnailImage, productName, quantity, price }, i) => {
          return (
            <div className="payProductDetail" key={i}>
              <img src={thumbnailImage} alt="productImg" />
              <ul className="payDetail">
                <li>{productName}</li>
                <li>{quantity}개</li>
                <li>{price && price.toLocaleString()}원</li>
              </ul>
              <ul className="shipment">
                <li>무료배송</li>
                <li>온라인 물류센터</li>
              </ul>
              <div className="payStatus">
                <span>결제완료</span>
                <button
                  className="reviewBtn"
                  onClick={() => {
                    showReview();
                    setControlReview(false);
                    setReviewModal(!reviewModal);
                  }}
                >
                  리뷰 작성하기
                </button>
                {/* 주문내역 모달 */}
                {reviewModal === true ? (
                  <Review
                    newReview={newReview}
                    pushReview={pushReview}
                    setReviewModal={setReviewModal}
                    review={review}
                    reviewArr={reviewArr}
                    paymentData={paymentData}
                    controlReview={controlReview}
                  />
                ) : null}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default PaymentProduct;
