import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchIdLeft = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/productlist.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);

  const searchIdData = feedData.filter(e => e.name.includes(searchInput));

  if (searchInput.length > 0 && searchIdData.length > 0) {
    return (
      <div className="filterBoxLeft">
        {searchIdData.map((productlist, i) => {
          return (
            <div key={i} className="filterIdLeft">
              <div className="filterName">{productlist.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchIdLeft;
