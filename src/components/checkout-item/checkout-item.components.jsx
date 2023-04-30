import "./checkout-item.style.scss";

import {useSelector, useDispatch} from "react-redux";
import {
  removeItemFromCard,
  clearItemFromCard,
  addItemToCard,
} from "../../store/card/card.action";
import {selectCardItems} from "../../store/card/card.selector";

const CheckoutItem = ({cardItem}) => {
  const dispatch = useDispatch();
  const {name, imageUrl, price, quantity} = cardItem;
  const cardItems = useSelector(selectCardItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCard(cardItems, cardItem));
  const removeItemFromCardHandler = () =>
    dispatch(removeItemFromCard(cardItems, cardItem));
  const addItemToCardHandler = () =>
    dispatch(addItemToCard(cardItems, cardItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        {" "}
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="decrease" onClick={removeItemFromCardHandler}>
          &#10096;
        </span>
        {quantity}
        <span className="increase" onClick={addItemToCardHandler}>
          &#10097;
        </span>
      </span>
      <span className="price">{price} €</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10008;
      </div>
    </div>
  );
};

export default CheckoutItem;
