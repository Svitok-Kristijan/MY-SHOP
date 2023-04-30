import {useEffect} from "react";
import {getRedirectResult} from "firebase/auth";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.form";
import Button from "../../components/button/button.component";
import "./autentication.scss";

import {
  auth,
  signInWithGoogleRedirect,
  createUserElementFromAuth,
} from "../../utils/firebase/firebase.utils";

const Autentication = () => {
  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserElementFromAuth(response.user);
      }
    },
    []
  );

  return (
    <div className="auth">
      <SignIn />
      <div className="btn">
        <Button buttonType="google" onClick={signInWithGoogleRedirect}>
          Sing in with google redirect
        </Button>
      </div>
      <SignUp />
    </div>
  );
};
export default Autentication;
