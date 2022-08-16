import { Box, Typography } from '@mui/material';
import './HomePage.scss';

function HomePage() {
  return (
    <Box className="container-homepage" sx={{ maxWidth: '2000px' }}>
      <Typography
        component="h1"
        sx={{ fontFamily: 'broadway', color: 'white' }}
        className="title-homepage"
      >
        Your Dress Code
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: 'Californian FB',
          color: 'white',
          fontStyle: 'Italic',
        }}
        className="subtitle-homepage"
      >
        Il tuo stile a portata di mano
      </Typography>
    </Box>
  );
}

export default HomePage;
