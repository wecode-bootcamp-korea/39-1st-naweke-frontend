import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
import './productlist.scss';

const PrdList = () => {
  const [prdList, setPrdList] = useState([]);

  useEffect(() => {
    fetch('data/productlist.json')
      .then(response => response.json())
      .then(res => setPrdList(res));
  }, []);
  return (
    <div className="productWrap">
      {prdList.map((prdlist, i) => {
        return <Product key={i} prdlist={prdlist} />;
      })}
    </div>
  );
};

export default PrdList;
