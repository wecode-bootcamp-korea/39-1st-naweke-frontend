import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Modal from './Modal';
import './Modal.scss';
import './PayReview.scss';
import { reviewData } from './data';

function PayReview() {
  const [modal, setModal] = useState(false);
  // mock data => []변경
  const [reviewArr, setReviewArr] = useState(reviewData);
  const [editArr, setEditArr] = useState(reviewData[0]);
  const reviewDelete = i => {
    return () => {
      let copy = [...reviewArr];
      copy.splice(i, 1);
      setReviewArr(copy);
    };
  };

  // 작성하기 눌렀을 때 수정하기
  // const reveiwEdit = i => {
  //   return () => {
  //     fetch(`http://10.58.52.162:3000/reviews${i}`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjo0LCJpYXQiOjE2NjkyMTA0MzYsImV4cCI6MTY3MTgwMjQzNiwiaXNzIjoiYWRtaW4iLCJzdWIiOiJhY2Nlc3NUb2tlbiJ9.vF3CttA8jRidyk35prgZG78D0a1NHHMIln9cuVYUVY0',
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => console.log(data));
  //   };
  // };

  // 리뷰 데이터
  const reviewListFetch = () => {
    fetch('http://10.58.52.162:3000/reviews', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjo0LCJpYXQiOjE2NjkyMTA0MzYsImV4cCI6MTY3MTgwMjQzNiwiaXNzIjoiYWRtaW4iLCJzdWIiOiJhY2Nlc3NUb2tlbiJ9.vF3CttA8jRidyk35prgZG78D0a1NHHMIln9cuVYUVY0',
      },
    })
      .then(response => response.json())
      .then(data => setReviewArr(data.reviewData));
  };

  // console.log(reviewArr);
  useEffect(() => {
    // reviewListFetch();
  }, []);

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
            {reviewArr.map((el, i) => {
              return (
                <tbody key={i}>
                  <tr className="postReview">
                    <td className="postId">{el.productName}</td>
                    {/* <td className="postTitle">상품명</td> */}
                    <td className="postTitle">{el.title}</td>
                    <td className="postScore">{el.score}</td>
                    <td className="postText">{el.content}</td>
                    <td>
                      <img
                        src="images/editing.png"
                        alt="edit"
                        className="changeBtn"
                        onClick={() => {
                          // fetch(`http://10.58.52.162:3000/reviews/${el.id}`, {
                          //   method: 'GET',
                          //   headers: {
                          //     Authorization:
                          //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjo0LCJpYXQiOjE2NjkyMTA0MzYsImV4cCI6MTY3MTgwMjQzNiwiaXNzIjoiYWRtaW4iLCJzdWIiOiJhY2Nlc3NUb2tlbiJ9.vF3CttA8jRidyk35prgZG78D0a1NHHMIln9cuVYUVY0',
                          //   },
                          // })
                          //   .then(response => response.json())
                          //   .then(data => setEditArr(data.reviewData));
                          setModal(!modal);
                        }}
                      />
                      {modal === true ? (
                        <Modal
                          setModal={setModal}
                          reviewArr={reviewArr}
                          editArr={editArr}
                          setEditArr={setEditArr}
                        />
                      ) : null}
                      <img
                        src="images/delete.png"
                        alt="delete"
                        className="changeBtn"
                        // onClick={reviewDelete(i)}
                        // onClick={() => {
                        //   fetch('http', {
                        //     method: 'GET',
                        //     headers: {
                        //       Authorization: '',
                        //     },
                        //   }).then(() => reviewDelete(i));
                        // }}
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

const Modal = ({ setEditArr, editArr, setModal }) => {
  // const [reviewArr, setReviewArr] = useState([]);
  // const [edit, setEdit] = useState({});
  const editReview = e => {
    const { name, value } = e.target;
    setEditArr(prev => ({ ...prev, [name]: value }));
    console.log(editArr);
  };

  // const postFetch = () => {
  //   fetch('http://10.58.52.105:3000', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       productId: '',
  //       title: review.title,
  //       content: review.text,
  //       score: review.score,
  //       imageUrl: '',
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('에러 발생!');
  //     })
  //     .catch(error => alert('실패'))
  //     .then(data => {
  //       alert('성공');
  //     });
  // };
  useEffect(() => {
    // postFetch();
  });
  return (
    <div className="reviewWrap">
      <div className="reviewContainer">
        <h3>리뷰 수정하기</h3>
        <div className="reviewInner">
          <input
            type="text"
            className="reviewTitle"
            name="title"
            placeholder="제목"
            onChange={editReview}
            value={editArr.title}
          />
          <div className="reviewVal">
            <span>
              평점
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
            </span>
            <span>el.id</span>
          </div>
          <input
            type="text"
            className="reviewInput"
            placeholder="리뷰를 작성하세요"
            name="content"
            value={editArr.content}
            onChange={editReview}
          />
          <button
            className="reviewBtn"
            onClick={() => {
              // pushReview();
              // fetch method PATCH 글수정
              // fetch('http', {
              //   method: 'PATCH',
              //   headers: { accessToken: '' },
              //   body: JSON.stringify({
              //     productId: '1',
              //     title: editArr.title,
              //     content: editArr.content,
              //     imageUrl: null,
              //     score: editArr.score,
              //   }),
              // })
              //   .then(response => {
              //     console.log(response.status);
              //     return response.json();
              //   })
              //   .then(data => console.log(data));
              setModal(false);
            }}
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};
