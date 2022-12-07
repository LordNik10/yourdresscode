import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({
  isDisplayed: false,
  listItems: [],
  totalItems: 0,
  addItem: () => {},
  addToTotalItems: () => {},
  handleIsDisplayed: () => {},
  decrementProductCounter: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}

function CartContextProvider({ children }) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const handleIsDisplayed = useCallback(() => {
    setIsDisplayed((prevValue) => !prevValue);
  }, []);

  const addItem = useCallback((item) => {
    setListItems((items) => [...items, item]);
  }, []);

  const addToTotalItems = useCallback((numberOfItem) => {
    setTotalItems((prevValue) => prevValue + numberOfItem);
  }, []);

  const decrementProductCounter = useCallback((id) => {
    // eslint-disable-next-line
    console.log('dentro decrement');
    setListItems((prevValue) =>
      prevValue.map((el) => {
        if (el.productInfo.id === id) {
          // eslint-disable-next-line
          el.productCounter = el.productCounter - 1;
        }
        return el;
      }),
    );

    setListItems((prevValue) =>
      prevValue.filter((el) => el.productCounter !== 0),
    );
  }, []);

  const cartContextProviderValue = useMemo(
    () => ({
      isDisplayed,
      listItems,
      totalItems,
      addItem,
      addToTotalItems,
      handleIsDisplayed,
      decrementProductCounter,
    }),
    [
      listItems,
      isDisplayed,
      totalItems,
      addItem,
      addToTotalItems,
      handleIsDisplayed,
      decrementProductCounter,
    ],
  );

  return (
    <CartContext.Provider value={cartContextProviderValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

CartContextProvider.defaultProps = {
  children: null,
};

CartContextProvider.propTypes = {
  children: PropTypes.element,
};
