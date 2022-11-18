import React from 'react';
import './DetailModal.scss';

function DetailModal() {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalText">
          <p className="close"></p>
          <p className="modalTitle">알림</p>
          <p className="modalFont">쇼핑을 계속 진행하시겠습니까?</p>
        </div>
        <div className="modalBtn">
          <button className="modalButton">예</button>
          <button className="modalButton">장바구니 보기</button>
        </div>
      </div>
    </div>
  );
}
export default DetailModal;
