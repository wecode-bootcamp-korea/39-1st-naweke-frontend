import React, { useState } from 'react';
import './Right.scss';
import './DetailModal';
import Review from './Review';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SIZE_LIST from './SIZE_LIST';

function Right(props) {
  const accessToken = localStorage.getItem('token');
  const navigate = useNavigate();
  const [getSize, setGetSize] = useState(0);
  console.log(getSize);

  const clickPay = () => {
    fetch('http://10.58.52.132:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        totalPrice: props.detailData.productInfo.price,
        orderItems: [
          {
            productOptionId: `${params.id}`,
            quantity: '1',
          },
        ],
      }),
    });
  };

  const basketAccess = () => {
    fetch('http://10.58.52.172:3000/Carts', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        productId: `${params.id}`,
        sizeId: getSize,
      }),
    });
  };

  const sizeHandle = e => {
    setGetSize(e.target.value);
  };

  return (
    <div className="rightContainer">
      <h1 className="title">{props.detailData.productInfo.name}</h1>

      <h4 className="description">
        {props.detailData.productInfo.description}
      </h4>
      <h4 className="price">
        {props.detailData.productInfo.price.toLocaleString()}원
      </h4>
      <h4 className="Size">사이즈 선택</h4>
      <div className="sizeButton">
        {props.detailData.productInfo.size.map((list, i) => {
          // const sizeValue = [list];
          return (
            list === SIZE_LIST[i].id && (
              <>
                <input
                  key={i}
                  type="radio"
                  id={list}
                  name="size"
                  value={SIZE_LIST[i].id}
                  className="radio"
                  onChange={sizeHandle}
                />
                <label htmlFor={list} className="label" key={list.id}>
                  {SIZE_LIST[i].name}
                </label>
              </>
            )
          );
        })}
      </div>
      <button className="nowBtn" onClick={clickPay}>
        바로결제
      </button>
      <button
        className="basketBtn"
        onClick={() => {
          basketAccess(props.detailData.productOptionId, getSize);
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
          {props.detailData.productInfo?.reviews.map(review => {
            return <Review review={review} />;
          })}
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
              A/S 책임자와 전화번호: (유)나위키코리아 온라인 스토어 고객센터 /
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
              제조자/수입품의 경우 수입자를 함께 표기: Naweke. Inc /
              (유)나위키코리아
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
export default Right;
