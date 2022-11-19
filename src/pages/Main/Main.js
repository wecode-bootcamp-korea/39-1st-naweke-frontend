import React, { useState } from 'react';
import ProductList from '../components/productlist';
import Filter from '../components/Filter';
import './Main.scss';

function Main() {
  const [productdata, setProductData] = useState([]);
  return (
    <div className="main">
      <Filter setData={setProductData} productdata={productdata} />
      <ProductList data={productdata} />
    </div>
  );
}

export default Main;
