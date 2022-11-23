import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './productlist.scss';
import './product.scss';

const ProductList = ({ data }) => {
  return (
    <div className="productWrap">
      {data.map(el => (
        <div className="prdBox" key={el.id}>
          <Link key={el.id} to={`/products/${el.id}`}>
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
    </div>
  );
};

export default ProductList;
