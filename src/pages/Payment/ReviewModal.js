import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../config';
import './ReviewModal.scss';

const ReviewModal = ({
  reviewData: { title, button },
  setReviewModal,
  reviewArr,
  paymentData,
  editArr,
  setEditArr,
}) => {
  const token = localStorage.getItem('token');
  const [review, setReview] = useState({});
  const navigate = useNavigate();

  const newReview = e => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };
  const editReview = e => {
    const { name, value } = e.target;
    setEditArr(prev => ({ ...prev, [name]: value }));
  };

  // 리뷰작성
  const newReviewFetch = () => {
    fetch(`${APIS.review}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: paymentData[0].orderProduct[0].productOptionId,
        title: review.title,
        content: review.text,
        score: review.score,
        imageUrl: null,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => alert('연결에 실패했습니다.'))
      .then(data => {
        alert('작성이 완료되었습니다.');
      });
  };
  // 리뷰수정
  const modifyReviewFetch = id => {
    fetch(`${APIS.review}${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        reviewId: reviewArr[0].id,
        title: editArr.title,
        content: editArr.content,
        imageUrl: null,
        score: editArr.score,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => navigate('/payment'));
    setReviewModal(false);
  };

  return (
    <div className="reviewWrap">
      <div className="reviewContainer">
        <h3>{title}</h3>
        <div className="reviewInner">
          {button === '작성완료' ? (
            <input
              type="text"
              className="reviewTitle"
              name="title"
              placeholder="제목"
              onChange={newReview}
            />
          ) : (
            <input
              type="text"
              className="reviewTitle"
              name="title"
              placeholder="제목"
              onChange={editReview}
              value={editArr.title}
            />
          )}

          <div className="reviewVal">
            <span>
              평점
              {button === '작성완료' ? (
                <>
                  <select
                    className="reviewSelect"
                    name="score"
                    onChange={newReview}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <input
                    type="text"
                    className="reviewInput"
                    placeholder="리뷰를 작성하세요"
                    name="content"
                    onChange={newReview}
                  />
                </>
              ) : (
                <>
                  <select
                    className="reviewSelect"
                    name="score"
                    onChange={editReview}
                    value={editArr.score}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <input
                    type="text"
                    className="reviewInput"
                    placeholder="리뷰를 작성하세요"
                    name="content"
                    value={editArr.content}
                    onChange={editReview}
                  />
                </>
              )}
            </span>
          </div>

          {button === '작성완료' ? (
            <button
              className="reviewBtn"
              onClick={() => {
                newReviewFetch();
                setReviewModal(false);
              }}
            >
              {button}
            </button>
          ) : (
            <button
              className="reviewBtn"
              onClick={i => {
                modifyReviewFetch();
                setReviewModal(false);
              }}
            >
              {button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
