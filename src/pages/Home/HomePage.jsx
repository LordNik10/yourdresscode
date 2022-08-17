import { Box, Typography } from '@mui/material';
import SliderImage from '../../components/SliderImage/SliderImage';
import './HomePage.scss';

function HomePage() {
  return (
    <>
      <Box className="container-homepage">
        <Typography
          component="h1"
          sx={{
            fontFamily: 'broadway',
            color: 'white',
            fontSize: { xs: '30px', sm: '49px', md: '98px' },
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
            fontSize: { xs: '20px', sm: '31px', md: '62px' },
          }}
        >
          Il tuo stile a portata di mano
        </Typography>
      </Box>
      <SliderImage />
    </>
  );
}

export default HomePage;
