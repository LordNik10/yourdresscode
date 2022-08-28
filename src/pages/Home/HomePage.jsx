import { useState } from 'react';
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
import products from '../../helpers/products';
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
  const [page, setPage] = useState(1);

  const totalPage = products.length / 3;

  const handleIncrementPage = () => {
    if (page < totalPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleDecrementPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
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
          Il tuo stile a portata di mano
        </Typography>
        {/* <Button
          variant="outlined"
          sx={{
            borderColor: 'orange',
            color: 'orange',
            marginTop: '10%',
            width: '180px',
            height: '60px',
            padding: '0',
            ':hover': {
              backgroundColor: theme.palette.secondary.main,
              border: theme.palette.secondary.main,
              color: 'white',
              opacity: '0.8',
            },
          }}
          className="ciao"
        > */}
        <Link to="/products" className="styled-link">
          Show Products
        </Link>
        {/* </Button> */}
      </Box>
      {/* <Container
        sx={{
          marginTop: '5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5%',
        }}
      >
        <img src={imgHistory} alt="img history" />
        <Typography component="p" sx={{ width: '25%' }}>
          Siamo un marchio di abbigliamento di lusso con la missione e lo scopo
          di creare capi versatili, di classe e senza tempo, fatti per durare
          nel tempo. I nostri capi di abbigliamento, accessori e scarpe non si
          limitano a rendere più belle tutte le piccole cose della vita, ma ci
          aiutano anche a sentirci meglio con noi stessi.
        </Typography>
      </Container> */}
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
          <SliderImage productsList={products} page={page} />
          <ArrowForwardIosIcon
            onClick={handleIncrementPage}
            sx={{ cursor: 'pointer' }}
          />
        </Container>

        <Strengths strengthsList={strengths} />
      </Container>
    </>
  );
}

export default HomePage;
