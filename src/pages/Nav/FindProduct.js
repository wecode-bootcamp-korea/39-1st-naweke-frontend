import React from 'react';
import { useState, useEffect } from 'react';

const FindProduct = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/productlist.json')
      // http://10.58.52.162:3000/products
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);

  const searchIdData = feedData.filter(e => e.name.includes(searchInput));

  if (searchInput.length > 1 && searchIdData) {
    return (
      <div className="filterBox">
        {searchIdData.map(({ id, image, name, price }) => {
          return (
            <div key={id} className="filterId">
              <img src={image} alt="img" className="filterImg" />
              <div className="filterProduct">
                <p>{name}</p>
                <p>{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default FindProduct;
