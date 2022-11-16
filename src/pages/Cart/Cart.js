import React, { useState } from 'react';
import './Cart.scss';
import ProductList from './ProductList';

// const CARTS = [
//   {
//     id: 0,
//     product: {
//       id: 0,
//       name: 'hi',
//     },
//   },
// ];

function Cart() {
  //   const [carts, setCarts] = useState(CARTS);

  return (
    <div className="container">
      <div className="cart">
        <div className="cartContainer">
          <h1 className="titleWord">장바구니</h1>
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
          <div className="iconBox" />
          <div className="delivery fontSize">무료배송</div>
          <div className="arrival fontSize">도착예정일</div>
        </div>
        <div className="orderContainer">
          <h1 className="order titleWord">주문내역</h1>
          <aside className="orderList">
            <div className="orderPriceWrap orderFlex">
              <div className="priceMent fontSize">상품금액</div>
              <div className="orderPrice fontSize">75,000 원 </div>
            </div>
            <div className="deliveryWrap orderFlex">
              <div className="deliveryPrice fontSize">배송비</div>
              <div className="free fontSize">무료</div>
            </div>
            <div className="totalPriceWrap orderFlex">
              <div className="totalOrder fontSize">총 결제 금액</div>
              <div className="finalPrice fontSize">75,000 원</div>
            </div>
            <div className="orderbtnWrap">
              <button className="orderBtn ">주문결제</button>
            </div>
          </aside>
        </div>
      </div>
      <div className="wishList fontSize">위시리스트</div>
      <div className="imgContainer">
        <img
          src="/images/signup/nike.png"
          alt="장바구니 상품"
          className="productImg"
        />
      </div>
    </div>
  );
}

export default Cart;
