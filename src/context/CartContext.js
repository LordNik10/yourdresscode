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

  // const decrementProductCounter = useCallback((id)=>{
  //   listItems.filter((el)=>el.productInfo.id===id)
  // },[])

  const cartContextProviderValue = useMemo(
    () => ({
      isDisplayed,
      listItems,
      totalItems,
      addItem,
      addToTotalItems,
      handleIsDisplayed,
    }),
    [
      listItems,
      isDisplayed,
      totalItems,
      addItem,
      addToTotalItems,
      handleIsDisplayed,
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
