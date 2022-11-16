import React from 'react';
import './product.scss';
const Product = ({ prdlist }) => {
  console.log(2);
  return (
    <div className="prdBox">
      <img alt="prdImage" src={prdlist.image} className="prdImage" />
      <div className="contentBox">
        <div className="nowState">{prdlist.name}</div>
        <div className="prdName">{prdlist.discription}</div>
        <div className="color">{prdlist.color}</div>
        <div className="price">{prdlist.price}</div>
      </div>
    </div>
  );
};

export default Product;
