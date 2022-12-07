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
import ListItem from '../../components/ListItem/ListItem';
import { theme } from '../../config/theme';
import './Product.scss';
import { btnStyle } from '../../config/utility';
import { useLastPage } from '../../context/lastPage';
import { useCartContext } from '../../context/CartContext';

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

const sizes = [
  {
    id: 1,
    name: 'XS',
  },
  {
    id: 2,
    name: 'S',
  },
  {
    id: 3,
    name: 'M',
  },
  {
    id: 4,
    name: 'L',
  },
  {
    id: 5,
    name: 'XL',
  },
];

const colors = [
  {
    id: 1,
    name: 'Red',
  },
  {
    id: 2,
    name: 'White',
  },
  {
    id: 3,
    name: 'Black',
  },
  {
    id: 4,
    name: 'Blue',
  },
  {
    id: 5,
    name: 'Yellow',
  },
];

function Product() {
  const { product } = useParams();

  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [productCounter, setProductCounter] = useState(0);
  const { addItem, addToTotalItems, totalItems } = useCartContext();
  const { handleChangePage } = useLastPage();

  useEffect(() => {
    handleChangePage(`/product/${product}`);
  });

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
    if (productCounter === 0) {
      return;
    }
    setProductCounter(productCounter - 1);
  };

  const addItemToCart = () => {
    if (productCounter !== 0) {
      addItem({ productInfo, productCounter });
      addToTotalItems(productCounter);
    }
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
          {productInfo.category === `men's clothing` ||
          productInfo.category === `women's clothing` ? (
            <Stack direction="row" marginBottom={theme.spacing(3)} spacing={3}>
              <ListItem listItem={sizes} label="Sizes" />
              <ListItem listItem={colors} label="Color" />
            </Stack>
          ) : null}

          <Button
            sx={{
              backgroundColor: 'none',
              outline: '1px solid orange',
              color: 'orange',
              fontSize: '15px',
              height: '35px',
              ':hover': {
                backgroundColor: 'orange',
                color: 'white',
              },
              width: '200px',
            }}
            onClick={addItemToCart}
          >
            Add Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
