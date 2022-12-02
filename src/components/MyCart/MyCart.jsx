import PropTypes from 'prop-types';
import { Container } from '@mui/material';

function MyCart({ topCart }) {
  return (
    <Container
      sx={{
        border: '1px solid black',
        position: 'absolute',
        zIndex: 999,
        top: topCart,
        width: '100px',
        backgroundColor: 'red',
        transition: '1.5s all',
      }}
      maxWidth={false}
      disableGutters
    >
      <h1>cart</h1>
    </Container>
  );
}
export default MyCart;

MyCart.defaultProps = {
  topCart: 0,
};

MyCart.propTypes = {
  topCart: PropTypes.number,
};
