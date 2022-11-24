import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../components/productlist';
import { SORT_DATA } from './Sortfilter';
import './Mainthema.scss';

function Running() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortValue, setSortValue] = useState({});
  const sort = searchParams.get('sort');
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`http://10.58.52.162:3000/products?${searchParams.toString()}`)
      .then(response => response.json())
      .then(result => setPosts(result));
  }, [searchParams]);
  return (
    <div className="sortWrap">
      {SORT_DATA.map(({ id, text, url }) => {
        return (
          <>
            <input
              id={url}
              name="sort"
              type="radio"
              value={sortValue}
              onChange={e => {
                setSortValue(prev => ({
                  ...prev,
                  [e.target.name]: e.target.name,
                }));
              }}
              className={`sort ${text}`}
              key={id}
              onClick={() => {
                searchParams.delete('sort');
                searchParams.append('sort', url);
                setSearchParams(searchParams);
              }}
            />
            <label htmlFor={url} className="label">
              <span>{text}</span>
            </label>
          </>
        );
      })}
    </div>
  );
}

export default Running;
