import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function ImgMediaCard({ productsList, page }) {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        marginTop: '2%',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '5%',
        padding: 0,
        margin: 0,
      }}
      maxWidth={false}
    >
      {productsList.map(
        (el) =>
          el.page === page && (
            <Card
              sx={{
                maxWidth: 345,
                height: 460,
                width: { xs: '80%', md: '33%' },
                marginTop: '2%',
              }}
              key={el.id}
            >
              <Link to="/products">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="220"
                  image={el.img}
                />
              </Link>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link
                    to="/products"
                    style={{
                      textDecoration: 'none',
                      color: '#1976d2',
                      border: '1px solid #1976d2',
                      padding: '5px',
                    }}
                  >
                    Show Products
                  </Link>
                </Button>
              </CardActions>
            </Card>
          ),
      )}
    </Container>
  );
}

ImgMediaCard.defaultProps = {
  productsList: [],
  page: 1,
};

ImgMediaCard.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  page: PropTypes.number,
};
