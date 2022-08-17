import { Box, Typography, Button, Container } from '@mui/material';
import SliderImage from '../../components/SliderImage/SliderImage';
import { theme } from '../../config/theme';
import './HomePage.scss';
import product1 from '../../assests/img-product1.jpg';
import product2 from '../../assests/img-product2.jpg';
import product3 from '../../assests/img-product3.jpg';
// import imgHistory from '../../assests/img-history.png';

const products = [
  {
    name: 'White T-Shirt',
    img: product1,
  },
  {
    name: 'Fantasy T-Shirt',
    img: product2,
  },
  {
    name: 'Adidas sweatshirt',
    img: product3,
  },
];

function HomePage() {
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
        <Button
          variant="outlined"
          sx={{
            borderColor: 'orange',
            color: 'orange',
            marginTop: '10%',
            width: '180px',
            height: '60px',
            ':hover': {
              backgroundColor: theme.palette.secondary.main,
              border: theme.palette.secondary.main,
              color: 'white',
            },
          }}
        >
          Show Products
        </Button>
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
      <Container>
        <Typography
          component="h3"
          sx={{ padding: '24px', fontFamily: 'Roboto', fontSize: '30px' }}
        >
          Our Products
        </Typography>
        <SliderImage imgList={products} />
      </Container>
    </>
  );
}

export default HomePage;
