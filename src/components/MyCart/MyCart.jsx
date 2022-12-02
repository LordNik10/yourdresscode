import PropTypes from 'prop-types';
import { Container } from '@mui/material';

function MyCart({ topCart, opac }) {
  return (
    <Container
      sx={{
        border: '1px solid black',
        position: 'absolute',
        zIndex: 0,
        top: topCart,
        width: '100px',
        backgroundColor: 'red',
        transition: '0.9s all',
        opacity: opac,
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
  opac: 1,
};

MyCart.propTypes = {
  topCart: PropTypes.number,
  opac: PropTypes.number,
};
