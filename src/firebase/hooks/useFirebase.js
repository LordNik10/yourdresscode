import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth';
import { useLastPage } from '../../context/lastPage';
import { useSnackBar } from '../../context/Snackbar';
import {
  handleCreateNewUser,
  handleLoginEmailAndPassword,
  handleLogoutEmailAndPassword,
} from '../services';

export const useFirebase = () => {
  const { handleLogin } = useAuthContext();
  const { lastPage } = useLastPage();
  const navigate = useNavigate();
  const { setSnackBar } = useSnackBar();

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

  const createNewUser = (email, password) => {
    handleCreateNewUser(email, password, setSnackBar, navigate);
  };

  return { loginEmailAndPassword, logoutEmailAndPassword, createNewUser };
};
