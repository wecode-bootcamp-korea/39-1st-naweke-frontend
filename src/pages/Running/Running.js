import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Running() {
  const [search, setSearch] = useSearchParams();
  useEffect(() => {
    fetch('/running' + search.toString());
  }, []);
  return <h1>Running Page</h1>;
}

export default Running;
