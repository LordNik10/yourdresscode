import PropTypes from 'prop-types';
import { Container, Grid, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useCartContext } from '../../context/CartContext';

function MyCart({ topCart, opac, handleDisplayCart }) {
  const { listItems, decrementProductCounter } = useCartContext();

  return (
    <Container
      sx={{
        border: '1px solid black',
        position: 'absolute',
        zIndex: 'auto',
        top: topCart,
        width: '400px',
        right: 0,
        backgroundColor: 'white',
        transition: '0.9s all',
        opacity: opac,
        maxHeight: 500,
        color: 'black',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 10px -1px',
        overflowY: 'auto',
        padding: '10px',
      }}
      maxWidth={false}
      disableGutters
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <h1 style={{ margin: 0 }}>Cart</h1>
        <Stack flexDirection="row" justifyContent="center" alignItems="center">
          {listItems.length > 0
            ? Math.round(
                listItems
                  .map((el) => el.productInfo.price * el.productCounter)
                  .reduce((prev, next) => prev + next),
              )
            : 0}
          $
        </Stack>
        <CloseIcon
          fontSize="large"
          onClick={handleDisplayCart}
          sx={{ cursor: 'pointer' }}
        />
      </Stack>

      <hr />
      {listItems.map((el) => (
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          key={el.productInfo.id}
          marginBottom="20px"
          padding="3px"
          gap="20px"
        >
          <img
            src={el.productInfo.image}
            alt="product"
            style={{ width: '80px' }}
          />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {el.productInfo.title}
            </Grid>
            <Grid item xs={4}>
              {el.productInfo.price * el.productCounter}$
            </Grid>
            <Grid item xs={6}>
              Q:{el.productCounter}
            </Grid>
            <Grid item xs={2}>
              <DeleteIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => decrementProductCounter(el.productInfo.id)}
              />
            </Grid>
          </Grid>
        </Stack>
      ))}
    </Container>
  );
}
export default MyCart;

MyCart.defaultProps = {
  topCart: 0,
  opac: 1,
  handleDisplayCart: () => {},
};

MyCart.propTypes = {
  topCart: PropTypes.number,
  opac: PropTypes.number,
  handleDisplayCart: PropTypes.func,
};
