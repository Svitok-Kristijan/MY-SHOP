import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import "./sing-up.style.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useDispatch} from "react-redux";

import {signUpStart} from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SingUp = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("please confirm password again");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email already exists");
      }
      console.error(error);
    }
    resetFormFields();
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className="sing-up-container">
      <h2>Create new account</h2>
      <span className="title-singup">Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType={BUTTON_TYPE_CLASSES} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SingUp;
