import React, { useState, useEffect } from 'react';

import './Cart.scss';

import ProductList from './ProductList';

function Cart() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('/data/CartList.json')
      .then(response => response.json())
      .then(result => setCartList(result)); //콜백함수//
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.52.56:3000/carts/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       user_id: 8,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setCartList(result)); //콜백함수//
  // }, []);

  //총 가격
  const totalPrice = cartList.reduce((a, b) => a + b.quantity * b.price, 0);
  const cartDelete = product_option_id => {
    // const targetId = e.target.value;
    setCartList(
      cartList.filter(
        product => product.product_option_id !== product_option_id
      )
    );
    fetch('http://10.58.52.56:3000/carts/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        product_option_id: 5,
        user_id: 8,
      },
    })
      .then(response => response.json())
      .then(result => setCartList(result));
  };

  // useEffect(() => {
  //   fetch('http://10.58.52.56:3000/carts/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       user_id: 8,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setCartList(result)); //콜백함수//
  // }, []);
  // console.log(totalPrice);
  // console.log(cartList);
  return (
    <div className="container">
      <div className="cart">
        <div className="cartContainer">
          <h1 className="titleWord">장바구니</h1>
          {cartList.map(product => (
            <ProductList
              cartDelete={cartDelete}
              key={product.product_option_id}
              product={product}
              // setTotalPrice={setTotalPrice}
              onChangeAmount={amount => {
                setCartList(
                  cartList.map(cart => {
                    if (cart.product_option_id === product.product_option_id) {
                      cart.quantity = amount;
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
              <div className="orderPrice fontSize">
                {totalPrice.toLocaleString()} 원
              </div>
            </div>
            <div className="deliveryWrap orderFlex">
              <div className="deliveryPrice fontSize">배송비</div>
              <div className="free fontSize">무료</div>
            </div>
            <div className="totalPriceWrap orderFlex">
              <div className="totalOrder fontSize">총 결제 금액</div>
              <div className="finalPrice fontSize">
                {totalPrice.toLocaleString()} 원
              </div>
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

// const array1 = [{x: 1, y:2}, {x:2, y:3}, {x:3,y:2}];

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + (currentValue.x*currentValue.y),
//   0
// );

// console.log(sumWithInitial);
// expected output: 14
