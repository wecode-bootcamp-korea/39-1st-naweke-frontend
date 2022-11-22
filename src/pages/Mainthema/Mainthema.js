import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductList from '../components/productlist';

function Running({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`http://10.58.52.162:3000/products?${searchParams.toString()}`)
      .then(response => response.json())
      .then(result => setPosts(result));
  }, [searchParams]);
  console.log(searchParams.toString());
  const changeProduct = (mainCategory, subCategory) => {
    searchParams.set(mainCategory, subCategory);
    setSearchParams(searchParams);
  };
  return <h1>productlist</h1>;
}

export default Running;
