import React, { useState } from 'react';
import './ProductList.scss';
import SIZE_LIST from './SizeList';

function ProductList(props) {
  const { product, onChangeAmount, cartDelete, setCheckItems, checkItems } =
    props;
  const { product_option_id, price, thumbnail_image_url, quantity, name } =
    product;
  const [selected, setSelected] = useState(quantity);

  const handleSingleCheck = (checked, product_option_id) => {
    if (checked) {
      setCheckItems(prev => [...prev, product_option_id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== product_option_id));
    }
  };
  const saveAmount = e => {
    setSelected(e.target.value);
    onChangeAmount(e.target.value);
  };
  //상품 수량에 따른 가격
  const amountPrice = price * selected;

  //장바구니 물건 삭제 기능
  // console.log(checkItems);

  return (
    <>
      <div className="product">
        <input
          className="checkBox check"
          type="checkbox"
          onChange={e => handleSingleCheck(e.target.checked, product_option_id)}
          checked={checkItems.includes(product.product_option_id)}
        />
        <div className="imgContainer">
          <img
            src={thumbnail_image_url}
            alt="장바구니 상품"
            className="productImg"
          />
        </div>

        <div className="productInfo" key={product_option_id}>
          <div className="productInfo">
            <div className="productName line fontSize">{name}</div>
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
                  onClick={() => cartDelete(product_option_id)}
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
