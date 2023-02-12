// PARA SIGN IN CON REDIRECT
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { SignInMethod } from "firebase/auth";
import SingUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  //   auth, // PARA SIGN IN CON REDIRECT
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //   signInWithGoogleRedirect, // PARA SIGN IN CON REDIRECT
} from "../../utils/firebase/firebase.utils";

const SingIn = () => {
  // SIGN IN CON REDIRECT
  //   useEffect(() => {
  //     const getAwait = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     getAwait();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
      <SingUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sing in with Google Redirect
      </button> PARA SIGN IN CON REDIRECT*/}
    </div>
  );
};

export default SingIn;
