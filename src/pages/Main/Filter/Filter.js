import React, { useState } from 'react';
import './Filter.scss';
import COLOR_LIST from './colorData';

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
          <div className="womenCheck">
            <input type="checkbox" id="checkBox" />
            <label for="checkBox" />
            <span>여성</span>
          </div>
          <div className="menCheck">
            <input type="checkbox" id="checkBox2" />
            <label for="checkBox2" />
            <span>남성</span>
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
            {COLOR_LIST.map(el => {
              return (
                <div className="colorLayout" key={el.id}>
                  <span
                    className="showColor"
                    style={{ backgroundColor: el.color }}
                  >
                    {el.text}
                  </span>
                  <span>{el.text}</span>
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
