import { Container, Typography } from '@mui/material';
import { theme } from '../../config/theme';

function Footer() {
  return (
    <Container
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        height: 100,
      }}
      maxWidth={false}
    >
      <Typography component="h4" sx={{ color: 'white' }}>
        Informations
      </Typography>
      <Typography component="ul" sx={{ color: 'white' }}>
        Tel: 04952952
      </Typography>
    </Container>
  );
}

export default Footer;
