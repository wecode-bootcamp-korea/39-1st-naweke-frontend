import { check } from 'prettier';
import React, { useState, useEffect } from 'react';

import './Cart.scss';

import ProductList from './ProductList';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [checkItems, setCheckItems] = useState([]); //-4(빈 배열)

  const handleSingleCheck = (checked, product_option_id) => {
    if (checked) {
      setCheckItems(prev => [...prev, product_option_id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== product_option_id));
    }
  };

  const onChangeCheck = e => {
    setCheckItems(e.target.checked);
  }; // 자식한테 props로

  // const [checkList, setCheckList] = useState([]); //체크 박스 빈배열

  // const [isChecked, setisChecked] = useState(false); -2

  // const [checkCarts, setCheckCarts] = useState(new Set()); //-3
  // const [allCheckCarts, setAllCheckCarts] = useState(false);

  // const checkHandler = (product_option_id, isChecked) => {
  //   if (isChecked) {
  //     checkCarts.add(product_option_id);
  //     setCheckCarts(checkCarts);
  //   } else if (!isChecked && checkCarts.has(product_option_id)) {
  //     checkCarts.delete(product_option_id);
  //     setCheckCarts(checkCarts);
  //   }
  // };
  // console.log('checkCarts:', checkCarts);
  // console.log('allCheckCarts:', allCheckCarts);

  // const allCheckHandler = isChecked => {
  //   if (isChecked) {
  //     setCheckCarts(
  //       new Set(cartList.map(({ product_option_id }) => product_option_id))
  //     );
  //     setAllCheckCarts(true);
  //   } else {
  //     checkCarts.clear();
  //     setCheckCarts(setCheckCarts);
  //     setAllCheckCarts(false);
  //   }
  // };

  // useEffect(() => allCheckHandler(), [allCheckCarts]);

  useEffect(() => {
    fetch('/data/CartList.json')
      .then(response => response.json())
      .then(result => setCartList(result)); //콜백함수//
  }, []);

  // const onChangeCheck = e => {
  //   setisChecked(e.target.checked); -2
  // };

  //전체 체크박스

  // const changeAllBox = checked => {
  //   if (checked) {
  //     const checkAllBox = [];
  //     cartList.forEach(el => checkAllBox.push(el.product_option_id));
  //     setCheckList(checkAllBox);
  //     // console.log(checkAllBox);
  //     // console.log(checkList);
  //   } else {
  //     setCheckList([]);
  //   }
  // };

  //개별 체크박스

  // const changeSingleBox = (checked, product_option_id) => {
  //   if (checked) {
  //     setCheckList([...checkList, product_option_id]);
  //     // console.log(checkList);
  //   } else {
  //     setCheckList(checkList.filter(el => el !== product_option_id));
  //   }
  //   // console.log(checkList);
  // };

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

  // console.log(onchange);
  return (
    <div className="container">
      <div className="cart">
        <div className="cartContainer">
          <div className="titleContainer">
            <input
              className="allCheckBox check"
              type="checkbox"
              // checked={checkList.length === }
              // onChange={e => changeAllBox(e.target.checked)}
              // onChange={onChangeCheck} -2
            />
            <h1 className="titleWord titleCart">장바구니</h1>
          </div>
          <div className="cartInner">
            {cartList.map(product => (
              <ProductList
                cartDelete={cartDelete}
                key={product.product_option_id}
                product={product}
                onChangeCheck={onChangeCheck}
                checkItems={checkItems}
                // checkHandler={checkHandler}
                // changeSingleBox={changeSingleBox}
                // setTotalPrice={setTotalPrice}
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

// const array1 = [{x: 1, y:2}, {x:2, y:3}, {x:3,y:2}];

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + (currentValue.x*currentValue.y),
//   0
// );

// console.log(sumWithInitial);
// expected output: 14
