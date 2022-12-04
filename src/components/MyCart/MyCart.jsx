import PropTypes from 'prop-types';
import { Container, Stack } from '@mui/material';
import { useCartContext } from '../../context/CartContext';

function MyCart({ topCart, opac }) {
  const { listItems } = useCartContext();

  // eslint-disable-next-line
  console.log(listItems);

  return (
    <Container
      sx={{
        border: '1px solid black',
        position: 'absolute',
        zIndex: 0,
        top: topCart,
        width: '400px',
        right: 0,
        backgroundColor: 'white',
        transition: '0.9s all',
        opacity: opac,
        color: 'black',

        boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 10px -1px',
      }}
      maxWidth={false}
      disableGutters
    >
      <h1 style={{ margin: 0 }}>cart</h1>
      <hr />
      {listItems.map((el) => (
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          key={el.productInfo.id}
          marginBottom="20px"
          padding="3px"
        >
          <img
            src={el.productInfo.image}
            alt="product"
            style={{ width: '80px' }}
          />
          {el.productInfo.title}
        </Stack>
      ))}
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
