import React, { useEffect, useState } from 'react';
import Review from './Review';
import './ReviewModal.scss';
import './PayReview.scss';

function PayReview({ setControlReview, controlReview }) {
  const token = localStorage.getItem('token');
  const [reviewModal, setReviewModal] = useState(false);
  const [reviewArr, setReviewArr] = useState([]);
  const [editArr, setEditArr] = useState([]);

  // 리뷰 데이터
  const reviewListFetch = () => {
    fetch('http://10.58.52.162:3000/reviews', {
      // fetch('/data/review.json', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => setReviewArr(data.reviewData));
  };

  useEffect(() => {
    reviewListFetch();
  }, [reviewModal]);

  return (
    <div className="PayReview">
      <div className="showReview">
        <h3>작성된 리뷰</h3>
        <div className="showReviewInner">
          <table>
            <thead>
              <tr>
                <th className="postId">상품명</th>
                <th className="postTitle">제목</th>
                <th className="postScore">평점</th>
                <th className="postText">내용</th>
                <th className="postChange">수정</th>
              </tr>
            </thead>
            {reviewArr.data.map((el, i) => {
              return (
                <tbody key={i}>
                  <tr className="postReview">
                    <td className="postId">{el.productName}</td>
                    <td className="postTitle">{el.title}</td>
                    <td className="postScore">{el.score}</td>
                    <td className="postText">{el.content}</td>
                    <td>
                      <img
                        src="images/editing.png"
                        alt="edit"
                        className="changeBtn"
                        onClick={() => {
                          setControlReview(true);
                          fetch(`http://10.58.52.162:3000/reviews/${el.id}`, {
                            method: 'GET',
                            headers: {
                              Authorization: token,
                            },
                          })
                            .then(response => response.json())
                            .then(data => setEditArr(data.reviewData));
                          setReviewModal(!reviewModal);
                        }}
                      />
                      {reviewModal === true ? (
                        <Review
                          setReviewModal={setReviewModal}
                          reviewArr={reviewArr}
                          editArr={editArr}
                          setEditArr={setEditArr}
                          controlReview={controlReview}
                        />
                      ) : null}
                      <img
                        src="images/delete.png"
                        alt="delete"
                        className="changeBtn"
                        onClick={() => {
                          fetch(`http://10.58.52.162:3000/reviews/${el.id}`, {
                            method: 'DELETE',
                            headers: {
                              Authorization: token,
                            },
                          });
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default PayReview;
