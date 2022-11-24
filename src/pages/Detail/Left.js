import React from 'react';
import './Left.scss';

function Left({ detailData }) {
  return (
    <div className="productContainer">
      <img className="productImg" src={detailData?.productInfo?.image} />
    </div>
  );
}
export default Left;
