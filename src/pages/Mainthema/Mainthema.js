import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../components/productlist';
import { SORT_DATA } from './Sortfilter';
import './Mainthema.scss';

function Running() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`http://10.58.52.162:3000/products?${searchParams.toString()}`)
      .then(response => response.json())
      .then(result => setPosts(result));
  }, [searchParams]);
  return (
    <>
      <ul className="sortWrap">안녕</ul>
    </>
  );
}

export default Running;
