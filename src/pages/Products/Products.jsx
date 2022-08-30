import { Typography, Container, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import BasicList from '../../components/List/BasicList';
import { FirstLetterUpperCase } from '../../helpers/utility';
import MediaCard from '../../components/ProductsList/ProductsList';

function Products() {
  // eslint-disable-next-line
  const [categories, setCategories] = useState([]);

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
        setCategories(FirstLetterUpperCase(data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth={false}>
      <Typography component="h1">Products</Typography>
      <Box>
        <BasicList categories={categories} />
        <MediaCard />
      </Box>
    </Container>
  );
}

export default Products;
