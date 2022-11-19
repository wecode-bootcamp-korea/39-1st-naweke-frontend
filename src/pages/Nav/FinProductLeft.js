import React from 'react';
import { useState, useEffect } from 'react';

const SearchIdLeft = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/productlist.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);

  const searchIdData = feedData.filter(e => e.name.includes(searchInput));

  if (searchInput.length > 1 && searchIdData.length > 1) {
    return (
      <div className="filterBoxLeft">
        {searchIdData.map(({ id, name }) => {
          return (
            <div key={id} className="filterIdLeft">
              <div className="filterName">{name}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchIdLeft;
