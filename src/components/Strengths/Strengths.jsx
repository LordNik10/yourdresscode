import PropTypes from 'prop-types';
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';

function Strengths({ strengthsList }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: '2%',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '5%',
        backgroundColor: 'gray',
      }}
    >
      {strengthsList.map((el) => (
        <Card
          sx={{
            maxWidth: 345,
            height: 460,
            width: { xs: '80%', md: '33%' },
            marginTop: '2%',
          }}
          key={el.id}
        >
          <CardMedia
            component="img"
            alt="green iguana"
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
    </Box>
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
