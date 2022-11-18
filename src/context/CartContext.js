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
  addItem: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}

function CartContextProvider({ children }) {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [listItems, setListItems] = useState([]);

  const addItem = useCallback((item) => {
    setIsDisplayed(true);
    setListItems((items) => [...items, item]);
  }, []);

  const cartContextProviderValue = useMemo(
    () => ({
      isDisplayed,
      listItems,
      addItem,
    }),
    [listItems, isDisplayed, addItem],
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
