import { Box, Typography, Button } from '@mui/material';
import SliderImage from '../../components/SliderImage/SliderImage';
import { theme } from '../../config/theme';
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
            // fontSize: { xs: '30px', sm: '49px', md: '98px' },
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
          sx={{ borderColor: 'orange', color: 'orange' }}
        >
          Outlined
        </Button>
      </Box>
      <SliderImage />
    </>
  );
}

export default HomePage;
