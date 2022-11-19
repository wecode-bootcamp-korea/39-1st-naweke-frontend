import React from 'react';
import './Review.scss';

function Review() {
  return (
    <div className="review">
      <div className="reviewContainer">
        <input type="text" placeholder="제목" className="reviewTitleInput" />

        <div className="reviewVal">
          <span>
            평점
            <select className="reviewSel">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </span>
          <span>id</span>
          <span>날짜</span>
        </div>

        <input
          type="text"
          placeholder="리뷰를 작성하세요"
          className="reviewInput"
        />
        <button className="reviewBtn">작성하기</button>
      </div>
    </div>
  );
}
export default Review;
