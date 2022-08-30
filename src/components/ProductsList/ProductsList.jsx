// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=20');
        if (!res.ok) {
          throw new Error('Something goes wrong');
        }
        const data = await res.json();
        // eslint-disable-next-line
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {products.map((el) => (
        <Card sx={{ maxWidth: 345 }} key={el.id}>
          <CardMedia
            component="img"
            height="140"
            image={el.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {el.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default MediaCard;

// MediaCard.defaultProps = {
//   products: [],
// };

// MediaCard.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       img: PropTypes.string,
//       text: PropTypes.string,
//     }),
//   ),
// };
