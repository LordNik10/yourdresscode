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
});

export function useCartContext() {
  return useContext(CartContext);
}

function CartContextProvider({ children }) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = useCallback((item) => {
    setIsDisplayed(true);
    setListItems((items) => [...items, item]);
    setTotalItems((prevValue) => prevValue + 1);
  }, []);

  const cartContextProviderValue = useMemo(
    () => ({
      isDisplayed,
      listItems,
      totalItems,
      addItem,
    }),
    [listItems, isDisplayed, totalItems, addItem],
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
