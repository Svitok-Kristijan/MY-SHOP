import {CardIconContainer, ShopingBag, ItemCount} from "./card-icon.style";
import {useDispatch, useSelector} from "react-redux";

import {selectCardCount, selectCardOpen} from "../../store/card/card.selector";
import {setIsCardOpen} from "../../store/card/card.action";

const CardIcon = () => {
  const dispatch = useDispatch();

  //const {isCardOpen, setIsCardOpen, cardCount} = useContext(CardContext);
  const toogleIsCardOpen = () => dispatch(setIsCardOpen(!isCardOpen));
  const isCardOpen = useSelector(selectCardOpen);
  const cardCount = useSelector(selectCardCount);

  return (
    <CardIconContainer onClick={toogleIsCardOpen}>
      <ShopingBag className="shopping-icon" />
      <ItemCount>{cardCount}</ItemCount>
    </CardIconContainer>
  );
};

export default CardIcon;
