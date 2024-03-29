import {
  Typography,
  Container,
  Box,
  Stack,
  CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import { FirstLetterUpperCase } from '../../helpers/utility';
import MediaCard from '../../components/ProductsList/ProductsList';
import { useLastPage } from '../../context/lastPage';

function ProductsPage() {
  // eslint-disable-next-line
  const [categories, setCategories] = useState(['All Products']);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { handleChangePage } = useLastPage();

  useEffect(() => {
    handleChangePage('/products');
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) {
          throw new Error('Something goes wrong');
        }
        const data = await res.json();
        setCategories((preValue) => preValue.concat(data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Something goes wrong');
        }
        const data = await res.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function getProductsOfCategory(params) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${params}`,
      );
      if (!res.ok) {
        throw new Error('Something goes wrong');
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getAllProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) {
        throw new Error('Something goes wrong');
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return (
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <CircularProgress color="warning" />
      </Stack>
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{ position: 'absolute0', zIndex: 1 }}
      className="ciao"
    >
      <Typography component="h1" sx={{ fontSize: '30px' }}>
        Products
      </Typography>
      <Stack
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        marginTop="5%"
      >
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
            <Typography component="h2" sx={{ fontSize: '25px' }}>
              categories
            </Typography>
            <List>
              {categories.map((el) => (
                <ListItem disablePadding key={el}>
                  <ListItemButton>
                    {el !== 'All Products' ? (
                      <ListItemText
                        primary={el}
                        onClick={() => getProductsOfCategory(el)}
                      />
                    ) : (
                      <ListItemText
                        primary={el}
                        onClick={() => getAllProducts()}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>

        <MediaCard products={products} />
      </Stack>
    </Container>
  );
}

export default ProductsPage;
