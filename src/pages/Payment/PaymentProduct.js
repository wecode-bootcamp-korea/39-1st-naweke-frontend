import React, { useEffect, useState } from 'react';
import './Payment.scss';
import './PaymentProduct.scss';

function PaymentProduct({
  review,
  setReview,
  setReviewArr,
  reviewArr,
  paylist: { totalPrice, orderId, orderProduct, createAt },
}) {
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem('token');

  const newReview = e => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };
  const pushReview = () => {
    let copy = reviewArr.concat(review);
    setReviewArr(copy);
  };

  const showReview = () => {
    fetch('http://10.58.52.162:3000/reviews', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => setReviewArr(data.reviewData));
  };
  console.log(reviewArr);
  useEffect(() => {
    // showReview();
  }, [reviewArr]);
  return (
    <div className="paymentProduct">
      <div className="payProductInfo">
        <ul>
          <li>{createAt}</li>
          <li>총 주문 금액 {totalPrice} 원</li>
          <li>주문번호 : {orderId}</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
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
              <li>1</li>
              <li>2</li>
              <li>3</li>
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
                  // showReview();
                  setModal(!modal);
                }}
              >
                리뷰 작성하기
              </button>
              {/* 주문내역 모달 */}
              {modal === true ? (
                <Modal
                  newReview={newReview}
                  pushReview={pushReview}
                  setModal={setModal}
                  reviewArr={reviewArr}
                  review={review}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentProduct;

const Modal = ({ newReview, pushReview, setModal, review, editArr }) => {
  const postFetch = () => {
    fetch('http://10.58.52.105:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: '',
        title: review.title,
        content: review.text,
        score: review.score,
        imageUrl: '',
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => alert('실패'))
      .then(data => {
        alert('성공');
      });
  };
  useEffect(() => {
    // postFetch();
  });

  return (
    <div className="reviewWrap">
      <div className="reviewContainer">
        <h3>리뷰 작성하기</h3>
        <div className="reviewInner">
          <input
            type="text"
            className="reviewTitle"
            name="title"
            placeholder="제목"
            onChange={newReview}
            value={editArr.title}
          />
          <div className="reviewVal">
            <span>
              평점
              <select
                className="reviewSelect"
                name="score"
                onChange={newReview}
                value={editArr.score}
              >
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
            name="text"
            onChange={newReview}
            value={editArr.content}
          />
          <button
            className="reviewBtn"
            onClick={() => {
              pushReview();
              setModal(false);
            }}
          >
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
};
