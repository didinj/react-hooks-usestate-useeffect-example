import React, { useState, useEffect } from 'react';
import '../App.css';

function FetchEffect() {

  const [product, setProduct] = useState(null);
  const [url, setState] = useState(`http://localhost:3000/api/v1/products`);

  // useEffect(() => {
  //   const loadProduct = async() => {
  //     try {
  //       const response = await fetch(`http://localhost:3000/api/v1/products`);
  //       const data = await response.json();
  //       console.log(`Data fetched: ${data}`);
  //       setProduct(data);
  //     } catch (error) {
  //       console.log(`Error fetch data: ${error}`);
  //       throw error;
  //     }
  //   };

  //   if(!product) {
  //     loadProduct();
  //   }
  // });

  useEffect(() => {

    let abortController = new AbortController();

    const loadProduct = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        console.log(`Data fetched: ${data}`);
        setProduct(data);
      } catch (error) {
        console.log(`Error fetch data: ${error}`);
        throw error;
      }
    };

    loadProduct();

    // if(!product) {
    //   loadProduct();
    // } else {
    //   abortController.abort();
    // }

    return () => {
      console.log("Cancel fetch: abort");
      abortController.abort();
    };
  }, [url]);

  if (!product) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      {product.map((item, idx) => (
        <p key={idx}>{item.prod_name}</p>
      ))}
    </div>
  );
}
      
export default FetchEffect;