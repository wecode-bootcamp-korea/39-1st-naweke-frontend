import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FindProduct = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.162:3000/products')
      .then(response => response.json())
      .then(result => setFeedData(result.data));
  }, []);
  console.log(feedData);

  const searchIdData = feedData.filter(e => e.name.includes(searchInput));

  if (searchInput && searchIdData) {
    return (
      <div className="filterBox">
        <div className="innerFilterBox">
          {searchIdData.map(({ id, thumbnailUrl, name, price }) => {
            return (
              <Link key={id} to={`/products/${id}`}>
                <div key={id} className="filterId">
                  <img src={thumbnailUrl} alt="img" className="filterImg" />
                  <div className="filterProduct">
                    <p>{name}</p>
                    <p>{price.toLocaleString()}원</p>
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
