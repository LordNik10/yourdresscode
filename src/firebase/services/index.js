import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from '../config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleLoginEmailAndPassword = async (
  email,
  password,
  handleLogin,
  lastPage,
  navigate,
) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    // eslint-disable-next-line
    console.log(user);
    sessionStorage.setItem('token', user.user.accessToken);
    sessionStorage.setItem('expirationDate', Date.now() + 1800000);
    handleLogin(true);
    navigate(lastPage);
  } catch (error) {
    console.error(error);
  }
};

export const handleLogoutEmailAndPassword = async (handleLogin) => {
  try {
    await signOut(auth);
    handleLogin(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expirationDate');
  } catch (error) {
    console.error(error);
  }
};

export const handleCreateNewUser = async (
  email,
  password,
  setSnackBar,
  navigate,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // eslint-disable-next-line
    console.log(res);
    setSnackBar('User created successfully', 'success');
    navigate('/login');
  } catch (error) {
    console.error(error);
  }
};

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
