import { handleLoginEmailAndPassword } from '../services';

export const useFirebase = () => {
  const loginEmailAndPassword = (email, password) => {
    handleLoginEmailAndPassword(email, password);
  };

  return { loginEmailAndPassword };
};
