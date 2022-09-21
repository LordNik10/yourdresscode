import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import ShieldIcon from '@mui/icons-material/Shield';
import CookieIcon from '@mui/icons-material/Cookie';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { theme } from '../../config/theme';

function Footer() {
  return (
    <Container
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        height: { xs: 400, md: 150 },
        padding: '10px',
        display: 'flex',
        // flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        justifyContent: 'center',
      }}
      maxWidth={false}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
          justifyContent: 'flex-start',
          margin: 0,
          padding: 0,
        }}
      >
        <Typography component="h4" sx={{ color: 'white' }}>
          CONTACTS
        </Typography>
        <a href="tel:04952952" style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <LocalPhoneIcon sx={{ width: '7%', marginRight: '2%' }} />
            04952952
          </Typography>
        </a>

        <a
          href="mailto:yourdresscode@gmail.com"
          style={{ textDecoration: 'none' }}
        >
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <MailOutlineIcon sx={{ width: '7%', marginRight: '2%' }} />
            yourdresscode@gmail.com
          </Typography>
        </a>
        <Typography
          component="span"
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
          }}
        >
          <HomeIcon sx={{ width: '7%', marginRight: '2%' }} />
          Street 31th, London
        </Typography>
      </Container>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
          justifyContent: 'flex-start',
          margin: 0,
          padding: 0,
        }}
      >
        <Typography component="h4" sx={{ color: 'white' }}>
          LEGAL AREA
        </Typography>
        <Link to="#privacy-policy" style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <ShieldIcon sx={{ width: '7%', marginRight: '2%' }} />
            Privacy Policy
          </Typography>
        </Link>

        <Link to="#coockie-policy" style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <CookieIcon sx={{ width: '7%', marginRight: '2%' }} />
            Coockie Policy
          </Typography>
        </Link>
      </Container>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
          justifyContent: 'flex-start',
          margin: 0,
          padding: 0,
        }}
      >
        <Typography component="h4" sx={{ color: 'white' }}>
          FOLLOW US
        </Typography>
        <a href="https://www.facebook.com/" style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <FacebookIcon sx={{ width: '7%', marginRight: '2%' }} />
            Facebook
          </Typography>
        </a>

        <a href="https://www.instagram.com/" style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <InstagramIcon sx={{ width: '7%', marginRight: '2%' }} />
            Instagram
          </Typography>
        </a>

        <a href="https://www.youtube.com/" style={{ textDecoration: 'none' }}>
          <Typography
            component="span"
            sx={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <YouTubeIcon sx={{ width: '7%', marginRight: '2%' }} />
            Youtube
          </Typography>
        </a>
      </Container>
    </Container>
  );
}

export default Footer;
