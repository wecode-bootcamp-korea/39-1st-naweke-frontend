import React, { useState, useEffect, useNavigate } from 'react';
import { json } from 'react-router-dom';

import './Cart.scss';

import ProductList from './ProductList';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [checkItems, setCheckItems] = useState([]); // 체크 박스 빈 배열
  // const navigate = useNavigate();
  // console.log(checkItems);
  // console.log(cartList);
  // const goToOrderList = () => {
  //   const orderId = "";
  //   for ( key in cartList){
  //     orderId=(cartList[key].productOptionId);
  //   }
  //   fetch('http://127.0.0.1:3000/orders', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMiwiaWF0IjoxNjY5MDI2ODA5LCJleHAiOjE2NzE2MTg4MDksImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.DhfgeERBkf4s7uin2NCCSLX2tFNcWXRs-vgMvY4InJs',
  //     },
  //     body: json.stringify({
  //       totalPrice:`${totalPrice}`,
  //       orderItems:[{
  //         productOptionId:`${[orderId]}`
  //         quantity:`${cartList.quantity}`
  //       }]

  //     })
  //   })
  //     .then(response => response.json())
  //     .then(result => setCartList(result));
  //   navigate(/'/payment')
  // }

  const handleAllCheck = checked => {
    if (checked) {
      const newCheckArr = [];
      cartList.forEach(el => newCheckArr.push(el.productOptionId));
      setCheckItems(newCheckArr);
    } else {
      setCheckItems([]);
    }
  };
  //선택 삭제
  const selectDelete = () => {
    const afterDeleted = cartList.filter(
      el => !checkItems.includes(el.productOptionId) //원래꺼
    );
    setCartList(afterDeleted);
    // console.log(typeof checkItems[0]);
    // setCheckItems([]);
    const cartId = checkItems.map(el => {
      return el;
    });

    // const productApi = checkItems
    //   .map(el => {
    //     return `productOptionId[]=${el}&`;
    //   })
    //   .join('');
    // console.log(cartId);
    fetch(`http://10.58.52.172:3000/carts/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMiwiaWF0IjoxNjY5MDI2ODA5LCJleHAiOjE2NzE2MTg4MDksImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.DhfgeERBkf4s7uin2NCCSLX2tFNcWXRs-vgMvY4InJs',
      },
      body: JSON.stringify({ cartId: cartId }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'product deleted') {
          alert('삭제가 완료되었습니다.');
          getCartList();
        } else {
          alert('다시 시도해주세요!');
        }
      });
    setCheckItems([]);
  };

  // const selectDelete = () => {
  //   const afterDeleted = cartList.filter(el =>
  //     // !checkItems.includes(el.productOptionId)
  //     checkItems.includes(el.productOptionId) 이거 쓰자
  //   );
  //   setCartList(afterDeleted);
  //   setCheckItems([]);
  // };
  //선택 삭제 -> 결국 재렌더링인데 온클릭을 했을떼 카트리스트의 프로덕트옵션아이디와 다른것을 보여주면 된다.
  //그리고 setcheckitems에 빈배열 넣어주면 끝.

  //목데이터

  // useEffect(() => {
  //   fetch('/data/CartList.json')
  //     .then(response => response.json())
  //     .then(result => setCartList(result));
  // }, []);

  //백엔드 통신
  const getCartList = () => {
    fetch('http://10.58.52.172:3000/carts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMiwiaWF0IjoxNjY5MDI2ODA5LCJleHAiOjE2NzE2MTg4MDksImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.DhfgeERBkf4s7uin2NCCSLX2tFNcWXRs-vgMvY4InJs',
      },
    })
      .then(response => response.json())
      .then(result => setCartList(result));
  };
  //처음에 벡엔드 통신하는거 여기까지

  useEffect(() => {
    getCartList();
  }, []);

  //총 가격 계산
  const totalPrice = cartList
    .filter(el => checkItems.includes(el.productOptionId))
    .reduce((a, b) => a + b.quantity * b.price, 0);

  //삭제 버튼 통신
  const cartDelete = productOptionId => {
    // setCartList(
    //   cartList.filter(product => product.productOptionId !== productOptionId)
    // );
    const cartId = checkItems.map(el => {
      return el;
    });
    // console.log(cartId);
    fetch(`http://10.58.52.172:3000/carts/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMiwiaWF0IjoxNjY5MDI2ODA5LCJleHAiOjE2NzE2MTg4MDksImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.DhfgeERBkf4s7uin2NCCSLX2tFNcWXRs-vgMvY4InJs',
      },
      body: JSON.stringify({
        cartId: `${cartId}`,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'product deleted') {
          alert('삭제가 완료되었습니다.');
          getCartList();
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  /////여기까지 삭제 버튼 통신

  //목 데이터
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
            <button className="deleteButton" onClick={selectDelete}>
              선택 삭제
            </button>
          </div>
          <div className="cartInner">
            {cartList.map(product => (
              <ProductList
                cartDelete={cartDelete}
                key={product.productOptionId}
                product={product}
                setCheckItems={setCheckItems}
                checkItems={checkItems}
                // cartId={cartId}
                // quantityOnchange={quantityOnchange}
                selectDelete={selectDelete}
                onChangeAmount={amount => {
                  setCartList(
                    cartList.map(cart => {
                      if (cart.productOptionId === product.productOptionId) {
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
              <button className="orderBtn" disabled>
                주문결제
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Cart;
