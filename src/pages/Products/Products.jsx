import { Typography, Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import { FirstLetterUpperCase } from '../../helpers/utility';
import MediaCard from '../../components/ProductsList/ProductsList';

function Products() {
  // eslint-disable-next-line
  const [categories, setCategories] = useState(['All Products']);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) {
          throw new Error('Something goes wrong');
        }
        const data = await res.json();
        // eslint-disable-next-line
        console.log(data);
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
        // eslint-disable-next-line
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function getProductsOfCategory(params) {
    // eslint-disable-next-line
    console.log(params);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${params}`,
      );
      if (!res.ok) {
        throw new Error('Something goes wrong');
      }
      const data = await res.json();
      // eslint-disable-next-line
      console.log(data);
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
      // eslint-disable-next-line
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container maxWidth={false}>
      <Typography component="h1">Products</Typography>
      <Box sx={{ marginTop: '5%', display: 'flex', alignItems: 'flex-start' }}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
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
      </Box>
    </Container>
  );
}

export default Products;
