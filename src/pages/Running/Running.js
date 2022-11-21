import React, { useState } from 'react';
import ProductList from '../components/productlist';
import Filter from '../components/Filter';
import './Main.scss';

function Main() {
  const [productdata, setProductData] = useState([]);
  return (
    <div className="main">
      <Filter setData={setProductData} productdata={productdata} />
      <ProductList data={productdata} />
    </div>
  );
}

export default Main;

{
  /* import React, { useEffect } from 'react';
 import { useSearchParams } from 'react-router-dom';

 function Running() { */
}
{
  /* //   const [search, setSearch] = useSearchParams();
//   useEffect(() => { */
}
{
  /* //     fetch('/running' + search.toString());
//   }, [])
//   return <h1>Running Page</h1>;
// }

// export default Running; */
}
