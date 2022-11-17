import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Container,
} from '@mui/material';

function Strengths({ strengthsList }) {
  return (
    <Container
      sx={{
        width: '100%',
        marginTop: '2%',
        gap: '5%',
        backgroundColor: '#f4f8fb',
      }}
      disableGutters
      maxWidth={false}
    >
      <Typography
        component="h3"
        sx={{ padding: '24px', fontFamily: 'Roboto', fontSize: '30px' }}
      >
        Our Strengths
      </Typography>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {strengthsList.map((el) => (
          <Card
            sx={{
              maxWidth: 345,
              height: 460,
              width: { xs: '80%', md: '33%' },
              marginTop: '2%',
              backgroundColor: '#ffffff00',
              boxShadow: 'none',
            }}
            key={el.id}
          >
            <CardMedia
              component="img"
              alt="strengths"
              height="90"
              width="250"
              image={el.img}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                objectFit: 'contain',
              }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
              >
                {el.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default Strengths;

Strengths.defaultProps = {
  strengthsList: [],
};

Strengths.propTypes = {
  strengthsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};
