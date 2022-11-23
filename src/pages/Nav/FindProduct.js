import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="innerFilterBox">
          {searchIdData.map(({ id, image, name, price }) => {
            return (
              <Link key={id} to={`/products/${id}`}>
                <div key={id} className="filterId">
                  <img src={image} alt="img" className="filterImg" />
                  <div className="filterProduct">
                    <p>{name}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default FindProduct;
