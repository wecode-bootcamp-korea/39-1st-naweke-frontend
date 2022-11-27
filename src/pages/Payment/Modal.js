import React, { useEffect } from 'react';
import './Modal.scss';

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

export default Modal;
