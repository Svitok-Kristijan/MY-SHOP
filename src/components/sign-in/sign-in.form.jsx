import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import "./sing-in.style.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useDispatch} from "react-redux";
import {
  signInWithGooglePopup,
  createUserElementFromAuth,
  singInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const singInGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("user doesn't exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className="sing-in-container">
      <h2>Login with your account</h2>
      <span className="title-singup">Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="btn-container">
          <Button buttonType={BUTTON_TYPE_CLASSES} type="submit">
            Login
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={singInGoogleUser}
          >
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
