import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [productInfo, setProductInfo] = useState({});
  const { product } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${product}`);
        if (!res.ok) {
          throw new Error('Error loading product');
        }
        const data = await res.json();
        setProductInfo(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [product]);
  return (
    <>
      <Typography component="h1">{productInfo.title}</Typography>
      <img src={productInfo.image} alt="product" style={{ width: '30%' }} />
    </>
  );
}

export default Product;
