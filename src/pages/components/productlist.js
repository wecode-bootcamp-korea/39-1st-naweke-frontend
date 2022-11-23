import React from 'react';
import { Link } from 'react-router-dom';
import './productlist.scss';
import './product.scss';

const ProductList = ({ data }) => {
  return (
    <div className="productWrap">
      {data.map(({ id, description, thumbnailUrl, productname, price }) => (
        <div className="prdBox" key={id}>
          <Link key={id} to={`/products/${id}`}>
            <img alt="prdimage" src={thumbnailUrl} className="prdImage" />
            <div className="contentBox">
              <div className="nowState">{productname}</div>
              <div className="prdName">{description}</div>
              <div className="price">{price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
