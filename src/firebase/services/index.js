import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const handleLoginEmailAndPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    // eslint-disable-next-line
    console.log(user);
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
