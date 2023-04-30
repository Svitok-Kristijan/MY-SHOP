import "./payment.scss";
import money from "../../assets/money.png";
import {clearItemFromCard} from "../../store/card/card.action";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const Payment = () => {
  const dispatch = useDispatch();

  const clearDropdowHandler = () => dispatch(clearItemFromCard(null));

  useEffect(() => {
    const timer = setTimeout(() => {
      clearDropdowHandler();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment-container">
      <h1 className="payment-h1">Thank you for your purchase</h1>
      <span>Payment succesfully completed</span>
      <img src={money} alt="money" />
    </div>
  );
};

export default Payment;
