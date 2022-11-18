import React, { useState } from 'react';
import './Main.scss';
import PrdList from '../components/productlist';
import Filter from '../components/Filter';

function Main() {
  const [data, setData] = useState([]);
  return (
    <div className="main">
      <Filter setData={setData} data={data} />
      <PrdList data={data} />
    </div>
  );
}

export default Main;
