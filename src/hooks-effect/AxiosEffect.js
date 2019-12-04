import React, { useState, useEffect } from 'react';
import Axios from "axios";
import '../App.css';

function AxiosEffect() {

  const [product, setProduct] = useState(null);
  const [url, setState] = useState(`http://localhost:3000/api/v1/products`);

  useEffect(() => {
    let source = Axios.CancelToken.source();

    const loadProduct = async () => {
      try {
        const response = await Axios.get(url, {
          cancelToken: source.token
        });
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Cancel axios data source on error");
        } else {
          throw error;
        }
      }
    };

    loadProduct();

    return () => {
      console.log("Cancel axios data source");
      source.cancel();
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
  
export default AxiosEffect;