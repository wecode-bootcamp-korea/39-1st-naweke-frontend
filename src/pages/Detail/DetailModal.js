import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailModal.scss';

function DetailModal(props) {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalText">
          <p className="close" onClick={props.switchModal}></p>
          <p className="modalTitle">알림</p>
          <p className="modalFont">쇼핑을 계속 진행하시겠습니까?</p>
        </div>
        <div className="modalBtn">
          <button
            className="modalButton"
            onClick={() => {
              navigate('/Main');
            }}
          >
            리스트로 이동
          </button>
          <button
            className="modalButton"
            onClick={() => {
              navigate('/Cart');
            }}
          >
            장바구니 이동
          </button>
        </div>
      </div>
    </div>
  );
}
export default DetailModal;
