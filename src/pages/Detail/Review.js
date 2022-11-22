import React, { useState } from 'react';
import './Review.scss';

function Review(props) {
  return (
    <div className="review">
      <div className="reviewContainer">
        <h1 className="reviewTitle">title</h1>

        <div className="reviewVal">
          <span>평점</span>
          <span>nickname</span>
          <span>createAt</span>
        </div>

        <p className="reviewReview">리뷰</p>
      </div>
    </div>
  );
}
export default Review;
