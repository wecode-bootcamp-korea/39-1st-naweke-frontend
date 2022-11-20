import React, { useState } from 'react';
import './ProductList.scss';
import SIZE_LIST from './SizeList';

function ProductList(props) {
  const { product, onChangeAmount, setTotalPrice } = props;
  const { productId, productPrice, image_url, amount, productName } = product;

  // const setTotalPrice = props.setTotalPrice;

  const [selected, setSelected] = useState(amount);
  // const [price, setPrice] = useState(productPrice);

  const saveAmount = e => {
    // console.log(e.target.value);
    setSelected(e.target.value);
    onChangeAmount(productId, e.target.value);
  };
  const totalPrice = productPrice * selected;
  // console.log(selected);

  // const itemPrice = () => {
  //   setPrice(price * selected);
  // };
  // s
  // useEffect(() => {
  //   setPrice(productPrice * selected);

  //   // [10000, 20000, 30000, 40000]
  //   // [10000, 20000, 60000, 40000]
  //   // arr[id] = price;
  //   // setTotalPrice([...totalPrice, (totalPrice[productId - 1] = price)]);
  // }, [selected]);
  // console.log(price);

  return (
    <>
      <div className="product">
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
                // onChange={onChangeAmount}
                // value={selected}
                // onClick={itemPrice}
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
        <div className="productPrice"> {totalPrice} 원 </div>
      </div>

      <div className="delivery fontSize">무료배송</div>
      <div className="arrival fontSize">도착예정일</div>
    </>
  );
}

export default ProductList;
