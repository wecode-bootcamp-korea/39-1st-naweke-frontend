import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import SIZE_LIST from './SizeList';

function ProductList(props) {
  const { product, onChangeAmount, cartDelete, setCheckItems, checkItems } =
    props;
  const {
    productOptionId,
    price,
    thumbnailImageUrl,
    quantity,
    productName,
    colorName,
    sizeName,
    // cartId,
  } = product;
  const [selected, setSelected] = useState(quantity);

  const handleSingleCheck = (checked, productOptionId) => {
    if (checked) {
      setCheckItems(prev => [...prev, productOptionId]);
    } else {
      setCheckItems(checkItems.filter(el => el !== productOptionId));
    }
  };
  const saveAmount = e => {
    onChangeAmount(e.target.value);
    // quantityOnchange();
  };
  //상품 수량에 따른 가격
  const amountPrice = price * selected;

  //장바구니 물건 삭제 기능
  // console.log(checkItems);

  const quantityOnchange = e => {
    setSelected(e.target.value);

    fetch(
      `http://10.58.52.172:3000/carts/quantity?productOptionId=${productOptionId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMiwiaWF0IjoxNjY5MDI2ODA5LCJleHAiOjE2NzE2MTg4MDksImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.DhfgeERBkf4s7uin2NCCSLX2tFNcWXRs-vgMvY4InJs',
        },
        body: JSON.stringify({
          quantity: `${selected}`,
        }),
      }
    )
      .then(response => response.json())
      .then(result => console.log(result));
  };
  return (
    <>
      <div className="product">
        <input
          className="checkBox check"
          type="checkbox"
          onChange={e => handleSingleCheck(e.target.checked, productOptionId)}
          checked={checkItems.includes(product.productOptionId)}
        />
        <div className="imgContainer">
          <img
            src={thumbnailImageUrl}
            alt="장바구니 상품"
            className="productImg"
          />
        </div>

        <div className="productInfo" key={productOptionId}>
          <div className="productInfo">
            <div className="productName line fontSize">{productName}</div>
            <div className="productColor line gray fontSize">{colorName}</div>
            <div className="productSize line gray fontSize">{sizeName}</div>
            <div className="productAmount line gray fontSize">
              수량
              <select
                className="amountOption"
                onChange={quantityOnchange}
                defaultValue={selected}
              >
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
                <button
                  className="deleteBtn"
                  onClick={() => cartDelete(productOptionId)}
                >
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
        <div className="productPrice"> {amountPrice.toLocaleString()} 원 </div>
      </div>

      <div className="delivery fontSize">무료배송</div>
      <div className="arrival fontSize">도착예정일</div>
    </>
  );
}

export default ProductList;
