import React, { useState } from 'react';
import COLOR_LIST from './colorData';
import './Filter.scss';

const Filter = () => {
  const [priceValue, setPriceValue] = useState(50000);
  const handlePrice = e => {
    setPriceValue(e.target.value);
  };

  return (
    <div className="filter">
      <div className="filterInner">
        {/* gender */}
        <div className="productGender filterLayout">
          <h3>성별</h3>
          <div className="checkBoxList">
            <input type="checkbox" id="checkWomen" className="checkBoxInput" />
            <label for="checkWomen" />
            <span className="selectTitle">여성</span>
          </div>
          <div className="checkBoxList">
            <input type="checkbox" id="checkMen" className="checkBoxInput" />
            <label for="checkMen" />
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
              : '20000+'}
          </div>
        </div>
        {/* size */}
        <div className="productSize filterLayout">
          <h3>사이즈</h3>
          <div className="sizeBtnWrap">
            <button type="button">220</button>
            <button type="button">230</button>
            <button type="button">240</button>
            <button type="button">250</button>
            <button type="button">260</button>
            <button type="button">270</button>
            <button type="button">280</button>
            <button type="button">290</button>
            <button type="button">300</button>
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
