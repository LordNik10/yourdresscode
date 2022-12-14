import { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SliderImage from '../../components/SliderImage/SliderImage';
import { theme } from '../../config/theme';
import './HomePage.scss';
import Strengths from '../../components/Strengths/Strengths';
import quality from '../../assests/imgquality.png';
import trasparency from '../../assests/imgtrasparency.png';
import { useLastPage } from '../../context/lastPage';
// import products from '../../helpers/products';
// import imgHistory from '../../assests/img-history.png';

const strengths = [
  {
    id: 1,
    name: 'Trasparency',
    img: trasparency,
    text: 'We believe our strength has always been our total transparency when purchasing clothing. We will always tell you what you need to know, so that you can make an informed decision regarding your purchase.',
  },
  {
    id: 2,
    name: 'Quality',
    img: quality,
    text: 'Our strength is to work daily to ensure the highest quality of our products for our customers. We are proud of our attention to customer service, and strive to make every customer happy',
  },
];

function HomePage() {
  const [minPage, setMinPage] = useState(0);
  const [maxPage, setMaxPage] = useState(3);
  const [products1, setProducts1] = useState([]);
  const { handleChangePage } = useLastPage();

  useEffect(() => {
    handleChangePage('/');
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=6');
        if (!res.ok) {
          throw new Error('Bad request');
        }
        const data = await res.json();
        setProducts1(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleIncrementPage = () => {
    if (minPage !== 3) {
      setMaxPage((prevMaxPage) => prevMaxPage + 3);
      setMinPage((preMinPage) => preMinPage + 3);
    }
  };

  const handleDecrementPage = () => {
    if (minPage !== 0) {
      setMaxPage((prevMaxPage) => prevMaxPage - 3);
      setMinPage((preMinPage) => preMinPage - 3);
    }
  };

  return (
    <Container disableGutters maxWidth={false}>
      <Box className="container-homepage">
        <Typography
          component="h1"
          sx={{
            fontFamily: 'broadway',
            color: 'white',
            fontSize: theme.typography.h1,
          }}
        >
          Your Dress Code
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'Californian FB',
            color: 'white',
            fontStyle: 'Italic',
            fontSize: theme.typography.h2,
          }}
        >
          Your style is now
        </Typography>
        <Link to="/products" className="styled-link">
          Show Products
        </Link>
      </Box>

      <Container maxWidth={false} disableGutters>
        <Typography
          component="h3"
          sx={{ padding: '24px', fontFamily: 'Roboto', fontSize: '30px' }}
        >
          Our Products
        </Typography>

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowBackIosIcon
            onClick={handleDecrementPage}
            sx={{ cursor: 'pointer' }}
          />
          <SliderImage
            productsList={products1.slice(minPage, maxPage)}
            isButton
          />
          <ArrowForwardIosIcon
            onClick={handleIncrementPage}
            sx={{ cursor: 'pointer' }}
          />
        </Container>

        <Strengths strengthsList={strengths} />
      </Container>
    </Container>
  );
}

export default HomePage;
