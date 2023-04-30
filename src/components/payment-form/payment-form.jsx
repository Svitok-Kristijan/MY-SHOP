import {CardElement} from "@stripe/react-stripe-js";
import {PaymentFormComponent} from "./payment-form.styles";

const PaymentFormApp = () => {
  return (
    <PaymentFormComponent>
      <CardElement />
    </PaymentFormComponent>
  );
};

export default PaymentFormApp;
