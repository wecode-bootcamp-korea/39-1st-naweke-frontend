import React, { useState } from 'react';
import './Right.scss';
import './DetailModal';
import Review from './Review';

function Right(props) {
  return (
    <div className="rightContainer">
      <h1 className="title">product name</h1>
      <h4 className="description">description</h4>
      <h4 className="price">price</h4>
      <h4 className="Size">사이즈 선택</h4>

      <div className="sizeButton">
        <input
          type="radio"
          id="r1"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r1" className="label">
          220
        </label>

        <input
          type="radio"
          id="r2"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r2" className="label">
          230
        </label>

        <input
          type="radio"
          id="r3"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r3" className="label">
          240
        </label>

        <input
          type="radio"
          id="r4"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r4" className="label">
          250
        </label>

        <input
          type="radio"
          id="r5"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r5" className="label">
          260
        </label>

        <input
          type="radio"
          id="r6"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r6" className="label">
          270
        </label>

        <input
          type="radio"
          id="r7"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r7" className="label">
          280
        </label>

        <input
          type="radio"
          id="r8"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r8" className="label">
          290
        </label>

        <input
          type="radio"
          id="r9"
          name="caUse"
          className="radio"
          defaultChecked
        />
        <label htmlFor="r9" className="label">
          300
        </label>
      </div>
      <button
        className="basketBtn"
        onClick={() => {
          props.basketAccess();
          props.switchModal();
        }}
      >
        장바구니
      </button>

      <div className="infor">
        <details>
          <summary>
            <h3>리뷰</h3>
            <img className="directionImg" src="images/next.png" />
          </summary>
          <Review />
        </details>
        <details>
          <summary>
            <h3>추가 정보</h3>
            <img className="directionImg" src="images/next.png" />
          </summary>
          <p className="productInforTitle">상품정보제공고시</p>
          <ul className="productInfor">
            <li>
              제조연월: 수입제품으로 각 상품별 입고 시기에 따라 상이하여 정확한
              제조연월 제공이 어렵습니다. 제조연월을 확인하시려면 고객센터에
              문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을
              참고하시기 바랍니다.
            </li>
            <li>
              A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 /
              080-022-0182
            </li>
            <li>
              세탁방법 및 취급시 주의사항: 자세한 내용은 '자세히 보기'를
              클릭하여 확인 부탁드립니다.
            </li>
            <li>
              미성년자 권리 보호 안내: 자세한 내용은 '자세히 보기' 를 클릭하여
              확인 부탁드립니다.
            </li>
            <li>
              품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월),
              가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는
              제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단,
              제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을
              관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는
              책임을 지지 않습니다.
            </li>
            <li>
              제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc /
              (유)나이키코리아
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
export default Right;
