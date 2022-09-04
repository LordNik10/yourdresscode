import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function MediaCard({ products }) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5%',
      }}
    >
      {products.map((el) => (
        <Card
          sx={{
            width: 350,
            height: 600,
            marginBottom: '2%',
            cursor: 'pointer',
          }}
          key={el.id}
        >
          <CardMedia
            component="img"
            height="400"
            image={el.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: '20px' }}
            >
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${el.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default MediaCard;

MediaCard.defaultProps = {
  products: [],
};

MediaCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
