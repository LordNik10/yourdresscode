import {
  CircularProgress,
  Typography,
  Stack,
  Grid,
  Container,
  TextField,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { theme } from '../../config/theme';
import './Product.scss';

// const obj = {
//   textDecoration: 'none',
//   color: 'orange',
//   width: '180px',
//   height: '60px',
//   border: '1px solid orange',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop: '3%',
//   fontSize: '18px',
//   fontWeight: 'bold',
// };

const btnStyle = {
  backgroundColor: 'none',
  outline: '1px solid orange',
  color: 'orange',
  fontSize: '20px',
  height: '56px',
  ':hover': {
    backgroundColor: 'orange',
    color: 'white',
  },
};

function Product() {
  const { product } = useParams();

  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [productCounter, setProductCounter] = useState(0);

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

  const handleIncrementProductCounter = () => {
    setProductCounter(productCounter + 1);
  };

  const handleDecrementProductCounter = () => {
    setProductCounter(productCounter - 1);
  };

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
          <Typography component="h3" fontSize={theme.typography.h3}>
            {productInfo.title}
          </Typography>
          <Typography component="p" fontSize={theme.typography.body1}>
            {productInfo.description}
          </Typography>
          <Typography component="h4" fontSize={theme.typography.h4}>
            {productInfo.price} $
          </Typography>
          <Stack direction="row" alignItems="center" height="100px" spacing={3}>
            <Button onClick={handleDecrementProductCounter} sx={btnStyle}>
              -
            </Button>
            <TextField
              value={productCounter}
              inputProps={{
                readOnly: true,
              }}
            />
            <Button onClick={handleIncrementProductCounter} sx={btnStyle}>
              +
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
