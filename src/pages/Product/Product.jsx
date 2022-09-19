import {
  CircularProgress,
  Typography,
  Stack,
  Grid,
  Container,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [productInfo, setProductInfo] = useState({});
  const { product } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${product}`);
        if (!res.ok) {
          throw new Error('Error loading product');
        }
        const data = await res.json();
        setProductInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [product]);

  if (isLoading) {
    <Stack
      width="100%"
      height="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Stack>;
  }

  return (
    <Container sx={{ marginTop: '3%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={productInfo.image} alt="product" style={{ width: '70%' }} />
        </Grid>
        <Grid item xs={7}>
          <Typography component="h1">{productInfo.title}</Typography>
          <Typography component="p" fontSize="16px">
            {productInfo.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
