import React, { useState } from 'react';
import './Review.scss';

function Review({ review }) {
  return (
    <div className="review">
      <div className="reviewContainer">
        <h1 className="reviewTitle">{review.title}</h1>

        <div className="reviewVal">
          <span>{review.content}</span>
          <span>{review.nickname}</span>
          <span>{review.createAt}</span>
        </div>

        <p className="reviewReview">리뷰</p>
      </div>
    </div>
  );
}
export default Review;
