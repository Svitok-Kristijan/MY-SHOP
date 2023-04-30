import "./checkout.style.scss";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectCardItems, selectCardTotal} from "../../store/card/card.selector";
import PaymentForm from "../../components/payment-form/payment-form";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

const Checkout = () => {
  const cardItems = useSelector(selectCardItems);
  const cardTotal = useSelector(selectCardTotal);
  const amount = useSelector(selectCardTotal);
  const currentUser = useSelector(selectCurrentUser);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const paymentHandler = async () => {
    if (!stripe || !elements) {
      console.log("Stripe or elements not loaded.");
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount: amount * 100}),
    });

    const data = await response.json();

    if (!data.paymentIntent.client_secret) {
      console.log("Error creating payment intent");
      return;
    }

    const {client_secret: clientSecret} = data.paymentIntent;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.log("CardElement does not exist.");
      return;
    }

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Kristijan Svitok",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
        navigate({pathname: "/payment"});
      }
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cardItems.map((cardItem) => (
        <CheckoutItem key={cardItem.id} cardItem={cardItem} />
      ))}

      <span className="total">
        Total: {cardTotal} €
        <PaymentForm />
        <button onClick={paymentHandler} className="button-pay">
          Pay now
        </button>
      </span>
    </div>
  );
};

export default Checkout;
