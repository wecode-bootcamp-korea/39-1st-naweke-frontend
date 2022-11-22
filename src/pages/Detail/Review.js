import React, { useState } from 'react';
import './Review.scss';

function Review(props) {
  return (
    <div className="review">
      <div className="reviewContainer">
        <h1 className="reviewTitle">
          {/* {console.log(props.detailData.productInfo.reviews[0].title)} */}
        </h1>

        <div className="reviewVal">
          <span>평점</span>
          <span>id</span>
          <span>날짜</span>
        </div>

        <p className="reviewReview">리뷰</p>
      </div>
    </div>
  );
}
export default Review;
