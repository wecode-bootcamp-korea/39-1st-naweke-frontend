import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../components/productlist';

function Running({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const mainCategory = searchParams.get('mainCategory');
  const subCategory = searchParams.get('subCategory');

  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(
      `http://10.58.52.162:3000/products/all?mainCategory=${mainCategory}&subCategory=${subCategory}`
    )
      .then(response => response.json())
      .then(result => setPosts(result));
  }, [mainCategory, subCategory]);

  const changeProduct = (mainCategory, subCategory) => {
    searchParams.set(mainCategory, subCategory);
    setSearchParams(searchParams);
  };
  return <h1>dksl</h1>;
}

export default Running;
