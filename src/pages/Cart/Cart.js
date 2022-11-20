import React, { useState, useEffect } from 'react';

import './Cart.scss';

import ProductList from './ProductList';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [totalpricee, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch('/data/CartList.json')
      .then(response => response.json())
      .then(result => setCartList(result)); //콜백함수//
  }, []);
  console.log(cartList);
  // setLastPrice(cartList.amount * cartList.productPrice);
  // const lastPrice = cartList.productPrice * cartList.amount;
  // console.log(lastPrice);
  // const lastPrice = setCartList.reduce;

  // const [totalPrice, setTotalPrice] = useState(0);
  // const totalPrice = amount * productPrice;

  // useEffect(() => {
  //   const arr = [];
  //   cartList.forEach(({ amount, productPrice }) => {
  //     arr.push(amount * productPrice);
  //   });
  //   setTotalPrice(arr);
  //   // setTotalPrice(arr);
  // }, [cartList]);
  // console.log(totalPrice);
  // map cartList

  return (
    <div className="container">
      <div className="cart">
        <div className="cartContainer">
          <h1 className="titleWord">장바구니</h1>
          {cartList.map(product => (
            <ProductList
              key={product.productId}
              product={product}
              setTotalPrice={setTotalPrice}
              onChangeAmount={amount => {
                setCartList(
                  cartList.map(cart => {
                    if (cart.productId === product.productId) {
                      cart.amount = amount;
                    }
                    return cart;
                  })
                );
              }}
            />
          ))}
        </div>
        <div className="orderContainer">
          <h1 className="order titleWord">주문내역</h1>
          <aside className="orderList">
            <div className="orderPriceWrap orderFlex">
              <div className="priceMent fontSize">상품금액</div>
              <div className="orderPrice fontSize">원</div>
            </div>
            <div className="deliveryWrap orderFlex">
              <div className="deliveryPrice fontSize">배송비</div>
              <div className="free fontSize">무료</div>
            </div>
            <div className="totalPriceWrap orderFlex">
              <div className="totalOrder fontSize">총 결제 금액</div>
              <div className="finalPrice fontSize"> 원</div>
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
