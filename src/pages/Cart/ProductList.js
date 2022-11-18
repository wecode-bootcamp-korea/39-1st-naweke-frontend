import React, { useState } from 'react';
import './ProductList.scss';
import SIZE_LIST from './SizeList';

function ProductList(props) {
  const { productId, productPrice, image_url, amount, productName } =
    props.product;

  const [selected, setSelected] = useState();
  const [price, setPrice] = useState(productPrice);
  const saveAmount = e => {
    setSelected(e.target.value);
    setPrice(productPrice * amount);
  };
  // const [price, setPrice] = useState(productPrice);

  // const itemPrice = () => {
  //   setPrice(productPrice * amount);
  // };
  console.log(amount);

  return (
    <>
      <div className="product" key={productId}>
        <div className="imgContainer">
          <img src={image_url} alt="장바구니 상품" className="productImg" />
        </div>

        <div className="productInfo">
          <div className="productInfo">
            <div className="productName line fontSize">{productName}</div>
            <div className="productColor line gray fontSize">검정색</div>
            <div className="productSize line gray fontSize">
              사이즈
              <select className="sizeOption">
                {SIZE_LIST.clothes.map((items, index) => (
                  <option key={index} value={index}>
                    {items}
                  </option>
                ))}
              </select>
            </div>
            <div className="productAmount line gray fontSize">
              수량
              <select
                className="amountOption"
                onChange={saveAmount}
                // onClick={itemPrice}
                // defaultValue={amount}
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
        <div className="productPrice"> {price} 원 </div>
      </div>

      <div className="delivery fontSize">무료배송</div>
      <div className="arrival fontSize">도착예정일</div>
    </>
  );
}

export default ProductList;
