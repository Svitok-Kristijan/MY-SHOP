import {
  CardDropdownContainer,
  EmptyMessage,
  CardItems,
} from "./card-dropdown.style";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {selectCardItems} from "../../store/card/card.selector";
import {setIsCardOpen} from "../../store/card/card.action";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import CardItem from "../directory-item/card-item.component";

const CardDropdown = () => {
  const dispatch = useDispatch();
  // const {cardItems} = useContext(CardContext);
  const cardItems = useSelector(selectCardItems);
  //const {isCardOpen, setIsCardOpen} = useContext(CardContext);
  const toogleIsCardClose = () => dispatch(setIsCardOpen(false));

  return (
    <CardDropdownContainer>
      <CardItems>
        {cardItems.length ? (
          cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CardItems>
      <Link to="/checkout">
        <Button buttonType={BUTTON_TYPE_CLASSES} onClick={toogleIsCardClose}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </CardDropdownContainer>
  );
};

export default CardDropdown;
