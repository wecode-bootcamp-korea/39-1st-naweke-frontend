import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
import './productlist.scss';
import './product.scss';
import { Link } from 'react-router-dom';

const PrdList = ({ data }) => {
  //   const [prdList, setPrdList] = useState([]);

  //   useEffect(() => {
  //     fetch('data/productlist.json')
  //       .then(response => response.json())
  //       .then(res => setPrdList(res));
  //   }, []);
  //   console.log(prdList);
  return (
    <div className="productWrap">
      {data.map(el => (
        <div className="prdBox" key={el.id}>
          <Link key={el.id} to={`/ProductDetail/${el.name}`}>
            <img alt="prdimage" src={el.thumbnailUrl} className="prdImage" />
            <div className="contentBox">
              <div className="nowState">{el.name}</div>
              {/* <div className="prdName">{el.discription}</div> */}
              {/* <div className="color">{el.color}</div> */}
              <div className="price">{el.price}</div>
            </div>
          </Link>
        </div>
      ))}
      {/* {data.map((prdlist, id) => {
          return <Product key={id} prdlist={prdlist} />;
        })} */}
    </div>
  );
};

export default PrdList;
