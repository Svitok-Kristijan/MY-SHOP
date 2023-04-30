import {CardContext} from "../../context/card.context";
import {useSelector, useDispatch} from "react-redux";
import {
  ProductCardContainer,
  Footer,
  SpanName,
  SpanPrice,
} from "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {addItemToCard} from "../../store/card/card.action";
import {selectCardItems} from "../../store/card/card.selector";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const {imageUrl, name, price} = product;
  const itemCard = useSelector(selectCardItems);

  const addProductToCard = () => dispatch(addItemToCard(itemCard, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <SpanName>{name}</SpanName>
        <SpanPrice>{price} €</SpanPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add To Card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
