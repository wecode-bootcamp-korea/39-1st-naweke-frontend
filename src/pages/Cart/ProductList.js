import React from 'react';
import './ProductList.scss';

function ProductList() {
  return (
    <div>
      <div className="product">
        <div className="imgContainer">
          <img
            src="/images/signup/nike.png"
            alt="장바구니 상품"
            className="productImg"
          />
        </div>
        <div className="productInfo">
          <div className="productInfo">
            <div className="productName line fontSize">나이키 로고</div>
            <div className="productColor line gray fontSize">검정색</div>
            <div className="productSize line gray fontSize">
              사이즈
              <select className="sizeOption">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="productAmount line gray fontSize">
              수량
              <select className="amountOption">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className="iconBox">
              <div className="heartIconWrap">
                <button className="heartBtn">
                  <img
                    className="heartImg"
                    src="/images/signup/heart.png"
                    alt="하트아이콘"
                  />
                </button>
              </div>
              <div className="deleteIconWrap">
                <button className="deleteBtn">
                  <img
                    className="heartImg"
                    src="/images/signup/delete.png"
                    alt="삭제아이콘"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productPrice"> 75,000 원 </div>
      </div>
      <div className="iconBox">
        <div className="delivery fontSize">무료배송</div>
        <div className="arrival fontSize">도착예정일</div>
      </div>
    </div>
  );
}

export default ProductList;
