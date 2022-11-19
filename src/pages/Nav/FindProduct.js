import React from 'react';
import { useState, useEffect } from 'react';

const SearchId = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/productlist.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);

  const searchIdData = feedData.filter(e => e.name.includes(searchInput));

  if (searchInput.length > 1 && searchIdData.length > 1) {
    return (
      <div className="filterBox">
        {searchIdData.map(({ id, image, name, discription, price }) => {
          return (
            <div key={id} className="filterId">
              <img src={image} alt="img" className="filterImg" />
              {name}
              {discription}
              {price}
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchId;
