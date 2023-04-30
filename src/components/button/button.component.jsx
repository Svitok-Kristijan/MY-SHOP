import {BaseButton, GoogleSignInButton, InvertedButton} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({children, buttonType, ...otherProps}) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      return (
        <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>
      );
    case BUTTON_TYPE_CLASSES.inverted:
      return <InvertedButton {...otherProps}>{children}</InvertedButton>;
    case BUTTON_TYPE_CLASSES:
      return <BaseButton {...otherProps}>{children}</BaseButton>;
    default:
      return;
  }
};

export default Button;
