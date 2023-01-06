import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth';
import { useLastPage } from '../../context/lastPage';
import {
  handleLoginEmailAndPassword,
  handleLogoutEmailAndPassword,
} from '../services';

export const useFirebase = () => {
  const { handleLogin } = useAuthContext();
  const { lastPage } = useLastPage();
  const navigate = useNavigate();

  const loginEmailAndPassword = (email, password) => {
    handleLoginEmailAndPassword(
      email,
      password,
      handleLogin,
      lastPage,
      navigate,
    );
  };

  const logoutEmailAndPassword = () => {
    handleLogoutEmailAndPassword(handleLogin);
  };

  return { loginEmailAndPassword, logoutEmailAndPassword };
};
