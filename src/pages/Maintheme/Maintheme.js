import React, { useEffect, useState } from 'react';
import ProductList from '../components/productlist';
// import Filter from '../components/Filter';
import './Maintheme.scss';
import { useSearchParams } from 'react-router-dom';
import { SORT_DATA } from './Sortdata';

function Maintheme() {
  const [productdata, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortValue, setSortValue] = useState({});
  const sort = searchParams.get('sort');
  const [posts, setPosts] = useState();

  const imgName = searchParams.get('subCategory');

  console.log(imgName);

  useEffect(() => {
    fetch(`http://10.58.52.162:3000/products?${searchParams.toString()}`)
      .then(response => response.json())
      .then(result => setPosts(result));
  }, [searchParams]);

  useEffect(() => {
    fetch('data/productlist.json')
      .then(resopnse => resopnse.json())
      .then(res => setProductData(res));
  }, []);

  return (
    <>
      <div className="navUnderImg">
        <img alt="navUnderImg" src={`images/${imgName}.png`} />
      </div>
      <div className="sortWrap">
        {SORT_DATA.map(({ id, text, url }) => {
          return (
            <>
              <input
                id={url}
                name="sort"
                type="radio"
                value={sortValue}
                onChange={e => {
                  setSortValue(prev => ({
                    ...prev,
                    [e.target.name]: e.target.name,
                  }));
                }}
                className={`sort ${text}`}
                key={id}
                onClick={() => {
                  searchParams.delete('sort');
                  searchParams.append('sort', url);
                  setSearchParams(searchParams);
                }}
              />
              <label htmlFor={url} className="label">
                <span>{text}</span>
              </label>
            </>
          );
        })}
      </div>
      <div className="main">
        {/* <Filter setData={setProductData} productdata={productdata} /> */}
        <ProductList data={productdata} />
      </div>
    </>
  );
}

export default Maintheme;
