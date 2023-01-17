import React, { useState } from 'react';
import COLOR_LIST from './colorData';
import SIZE_LIST from './sizeData';
import PRICE_LIST from './priceData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Filter.scss';

const Filter = ({ setFilterData }) => {
  const IP = 'http://10.58.52.162:3000/products?';
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState({
    size: '',
    color: '',
    price: 0,
  });

  const handleSelect = e => {
    const { name, value, id } = e.target;
    setSelectValue(prev => ({ ...prev, [name]: value }));
    if (name === 'size') {
      searchParams.append(name, value);
      setSearchParams(searchParams);
      filtering(searchParams.toString());
    } else if (name === 'price') {
      searchParams.set(name, id);
      setSearchParams(searchParams);
      filtering(searchParams.toString());
    } else {
      searchParams.set(name, value);
      setSearchParams(searchParams);
      filtering(searchParams.toString());
    }
  };

  const sizeTitle = searchParams.get('mainCategory');
  const handleGender = e => {
    searchParams.set(e.target.name, e.target.value);
    setSearchParams(searchParams);
    filtering(searchParams.toString());
  };

  const filtering = url => {
    fetch(`${IP}${url}`)
      .then(response => response.json())
      .then(data => setFilterData(data.data));
  };

  return (
    <div className="filter">
      <div className="filterInner">
        <div className="mainSort filterLayout">
          <span>
            조건별 검색
            <img
              src="images/goback.png"
              alt="goback"
              onClick={() => {
                navigate('?mainCategory=shoes&subCategory=running');
              }}
            />
          </span>
        </div>
        {/* gender */}
        <div className="productGender filterLayout">
          <h3>성별</h3>
          <fieldset>
            <div className="checkBoxList">
              <label for="checkWomen">
                <input
                  type="radio"
                  id="checkWomen"
                  name="gender"
                  value="woman"
                  className="checkBoxInput"
                  onChange={handleGender}
                />
                <span className="selectTitle">여성</span>
              </label>
            </div>
            <div className="checkBoxList">
              <label for="checkMen">
                <input
                  type="radio"
                  id="checkMen"
                  name="gender"
                  value="man"
                  className="checkBoxInput"
                  onChange={handleGender}
                />
                <span className="selectTitle">남성</span>
              </label>
            </div>
          </fieldset>
        </div>
        {/* price */}
        <div className="productPrice filterLayout">
          <h3>가격</h3>
          {PRICE_LIST.map(({ id, price }) => {
            return (
              <div className="showPrice" key={id}>
                <label htmlFor={id} className="label">
                  <input
                    type="radio"
                    name="price"
                    id={id}
                    value={price}
                    checked={Number(selectValue.price) === price}
                    onChange={handleSelect}
                  />
                  <span>
                    {price < 200001
                      ? `${(
                          price - 50000
                        ).toLocaleString()}원 ~${price.toLocaleString()}원`
                      : '200,000원+'}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        {/* size */}
        <div className="productSize filterLayout">
          <h3>사이즈</h3>
          <div className="sizeBtnWrap">
            {sizeTitle &&
              SIZE_LIST[sizeTitle].map((size, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      name="size"
                      id={`size${i}`}
                      value={size}
                      onChange={handleSelect}
                    />
                    <label htmlFor={`size${i}`} className="label">
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
            {COLOR_LIST.map(({ id, text }) => {
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
                  <label htmlFor={`color${id}`} className="label">
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
