import React, { useState } from 'react';
import COLOR_LIST from './colorData';
import SIZE_LIST from './sizeData';
import './Filter.scss';

const Filter = () => {
  const [selectValue, setSelectValue] = useState({
    size: '',
    color: '',
    price: 50000,
  });
  const handleSelect = e => {
    const { name, value } = e.target;
    setSelectValue(prev => ({ ...prev, [name]: value }));
  };

  const [filterData, setFilterData] = useState([]);
  const filtering = url => {
    fetch(`http://10.58.52.162:3000/products/all?${url}`)
      .then(response => response.json())
      .then(data => setFilterData(data));
  };

  console.log(filterData);

  return (
    <div className="filter">
      <div className="filterInner">
        {/* gender */}
        <div className="productGender filterLayout">
          <h3>성별</h3>
          <fieldset>
            <div className="checkBoxList">
              <input
                type="radio"
                id="checkWomen"
                name="genderCheck"
                className="checkBoxInput"
              />
              <label
                for="checkWomen"
                onClick={() => filtering('gender=woman')}
                // onChange={() => filtering('gender=woman')}
              />
              <span className="selectTitle">여성</span>
            </div>
            <div className="checkBoxList">
              <input
                type="radio"
                id="checkMen"
                name="genderCheck"
                className="checkBoxInput"
              />
              <label
                for="checkMen"
                onClick={() => filtering('gender=man')}
                // onChange={() => filtering('gender=1')}
              />
              <span className="selectTitle">남성</span>
            </div>
          </fieldset>
        </div>
        {/* price */}
        <div className="productPrice filterLayout">
          <h3>가격</h3>
          <input
            type="range"
            name="price"
            min="50000"
            max="250000"
            step={50000}
            value={selectValue.price}
            onChange={() => {
              handleSelect();
              filtering();
            }}
          />
          <div className="showPrice">
            {selectValue.price < 200001
              ? (selectValue.price - 50000).toLocaleString() +
                '원 ~' +
                Number(selectValue.price).toLocaleString() +
                '원'
              : '200,000원+'}
          </div>
        </div>
        {/* size */}
        <div className="productSize filterLayout">
          <h3>사이즈</h3>
          <div className="sizeBtnWrap">
            {SIZE_LIST.shoes.map((size, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    name="size"
                    id={`size${i}`}
                    value={size}
                    checked={Number(selectValue.size) === size}
                    onChange={handleSelect}
                    className="radio"
                  />
                  <label
                    htmlFor={`size${i}`}
                    onChange={() => filtering(`size=${i}`)}
                    className="label"
                  >
                    <span>{size}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* color */}
        <div className="productColor filterLayout">
          <h3>색상</h3>
          <div className="colorBtnWrap">
            {COLOR_LIST.map(({ id, text }, i) => {
              return (
                <div className="colorLayout" key={id}>
                  <input
                    type="radio"
                    id={`color${id}`}
                    name="color"
                    value={text}
                    checked={selectValue.color === text}
                    onChange={handleSelect}
                    className="showColor"
                  />
                  <label
                    htmlFor={`color${id}`}
                    className="label"
                    onChange={() => filtering(`color=${text}`)}
                  >
                    <div className={`bgcolor ${text}`} />
                    <span>{text}</span>
                  </label>
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
