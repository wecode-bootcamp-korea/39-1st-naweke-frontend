import React, { useState, useEffect } from 'react';

import './Cart.scss';

import ProductList from './ProductList';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [checkItems, setCheckItems] = useState([]); // 체크 박스 빈 배열

  const handleAllCheck = checked => {
    if (checked) {
      const newCheckArr = [];
      cartList.forEach(el => newCheckArr.push(el.product_option_id));
      setCheckItems(newCheckArr);
    } else {
      setCheckItems([]);
    }
  };

  useEffect(() => {
    fetch('/data/CartList.json')
      .then(response => response.json())
      .then(result => setCartList(result));
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

  //총 가격 계산

  const totalPrice = cartList.reduce((a, b) => a + b.quantity * b.price, 0);

  //삭제 버튼

  const cartDelete = product_option_id => {
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

  return (
    <div className="container">
      <div className="cart">
        <div className="cartContainer">
          <div className="titleContainer">
            <input
              className="allCheckBox check"
              type="checkbox"
              onChange={e => handleAllCheck(e.target.checked)}
              checked={checkItems.length === cartList.length ? true : false}
            />
            <h1 className="titleWord titleCart">장바구니</h1>
          </div>
          <div className="cartInner">
            {cartList.map(product => (
              <ProductList
                cartDelete={cartDelete}
                key={product.product_option_id}
                product={product}
                setCheckItems={setCheckItems}
                checkItems={checkItems}
                onChangeAmount={amount => {
                  setCartList(
                    cartList.map(cart => {
                      if (
                        cart.product_option_id === product.product_option_id
                      ) {
                        cart.quantity = amount;
                      }
                      return cart;
                    })
                  );
                }}
              />
            ))}
          </div>
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
    </div>
  );
}

export default Cart;
