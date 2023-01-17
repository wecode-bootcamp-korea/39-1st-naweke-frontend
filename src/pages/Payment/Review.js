import React from 'react';
import ReviewModal from './ReviewModal';

function Review({
  newReview,
  pushReview,
  setReviewModal,
  review,
  reviewArr,
  paymentData,
  editArr,
  setEditArr,
  controlReview,
}) {
  const CREATE_REVIEW = {
    title: '리뷰 작성하기',
    button: '작성완료',
  };
  const UPDATE_REVIEW = {
    title: '리뷰 수정하기',
    button: '수정하기',
  };
  return (
    <div className="Review">
      <ReviewModal
        reviewData={controlReview ? UPDATE_REVIEW : CREATE_REVIEW}
        newReview={newReview}
        pushReview={pushReview}
        setReviewModal={setReviewModal}
        review={review}
        reviewArr={reviewArr}
        paymentData={paymentData}
        editArr={editArr}
        setEditArr={setEditArr}
      />
    </div>
  );
}

export default Review;
