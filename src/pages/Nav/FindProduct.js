import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchId = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/productlist.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);

  const searchIdData = feedData.filter(e => e.name.includes(searchInput));

  if (searchInput.length > 0 && searchIdData.length > 0) {
    return (
      <div className="filterBox">
        {searchIdData.map((productlist, i) => {
          return (
            <div key={i} className="filterId">
              <img src={productlist.image} alt="img" className="filterImg" />
              {productlist.name}
              {productlist.discription}
              {productlist.price}
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchId;
