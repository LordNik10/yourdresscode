import PropTypes from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const lastPageContext = createContext({
  lastPage: '/',
  handleLastPage: () => {},
});

export function useLastPage() {
  return useContext(lastPageContext);
}

function LastPage({ children }) {
  const [lastPage, setLastPage] = useState('/');

  const handleChangePage = useCallback(
    (page) => {
      setLastPage(page);
    },
    [setLastPage],
  );

  const handleLastPage = useMemo(
    () => ({
      lastPage,
      handleChangePage,
    }),
    [handleChangePage, lastPage],
  );
  return (
    <lastPageContext.Provider value={handleLastPage}>
      {children}
    </lastPageContext.Provider>
  );
}

export default LastPage;

LastPage.defaultProps = {
  children: null,
};

LastPage.propTypes = {
  children: PropTypes.element,
};
