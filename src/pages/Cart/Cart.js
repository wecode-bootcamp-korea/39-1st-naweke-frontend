import React, { useState, useEffect } from 'react';

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
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch('/data/CartList.json')
      .then(response => response.json())
      .then(result => setCartList(result)); //콜백함수//
  }, []);
  console.log(cartList);
  return (
    <div className="container">
      <div className="cart">
        <div className="cartContainer">
          <h1 className="titleWord">장바구니</h1>
          {cartList.map(product => (
            <ProductList key={product.productId} product={product} />
          ))}
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
