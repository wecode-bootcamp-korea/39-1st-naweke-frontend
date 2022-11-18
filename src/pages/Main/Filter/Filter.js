import React, { useState } from 'react';
import COLOR_LIST from './colorData';
import SIZE_LIST from './sizeData';
import './Filter.scss';

const Filter = () => {
  const [priceValue, setPriceValue] = useState(50000);
  const handlePrice = e => {
    setPriceValue(e.target.value);
  };

  const [filterData, setFilterData] = useState([]);
  const filtering = url => {
    fetch(`http://10.58.52.193:3000/products/all?${url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(res => setFilterData(res));
    console.log(filtering);
  };

  return (
    <div className="filter">
      <div className="filterInner">
        {/* gender */}
        <div className="productGender filterLayout">
          <h3>성별</h3>
          <div className="checkBoxList">
            <input type="checkbox" id="checkWomen" className="checkBoxInput" />
            <label for="checkWomen" onChange={filtering('gender=2')} />
            <span className="selectTitle">여성</span>
          </div>
          <div className="checkBoxList">
            <input type="checkbox" id="checkMen" className="checkBoxInput" />
            <label for="checkMen" onChange={filtering('gender=1')} />
            <span className="selectTitle">남성</span>
          </div>
        </div>
        {/* price */}
        <div className="productPrice filterLayout">
          <h3>가격</h3>
          <input
            type="range"
            min="50000"
            max="250000"
            step={50000}
            value={priceValue}
            onChange={handlePrice}
          />
          <div className="showPrice">
            {priceValue < 200001
              ? priceValue - 50000 + '~' + priceValue
              : '200,000+'}
          </div>
        </div>
        {/* size */}
        <div className="productSize filterLayout">
          <h3>사이즈</h3>
          <div className="sizeBtnWrap">
            {
              // 데이터 카테고리 받기
              // data.category === 'shoes' &&
              SIZE_LIST.shoes.map((size, i) => {
                return (
                  <>
                    <input
                      type="radio"
                      id={`size${i}`}
                      key={i}
                      className="radio"
                    />
                    <label
                      htmlFor={`size${i}`}
                      onChange={filtering(`size=${i}`)}
                      className="label"
                    >
                      {size}
                    </label>
                  </>
                );
              })
            }
          </div>
        </div>
        {/* color */}
        <div className="productColor filterLayout">
          <h3>색상</h3>
          <div className="colorBtnWrap">
            {COLOR_LIST.map(({ id, color, text }) => {
              return (
                <div className="colorLayout" key={id}>
                  <span
                    className="showColor"
                    style={{ backgroundColor: color }}
                  >
                    {text}
                  </span>
                  <span>{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
