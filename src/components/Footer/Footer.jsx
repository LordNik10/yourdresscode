import { Container } from '@mui/material';
import { theme } from '../../config/theme';

function Footer() {
  return (
    <Container
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        bottom: 0,
      }}
      maxWidth={false}
    >
      ciao
    </Container>
  );
}

export default Footer;
