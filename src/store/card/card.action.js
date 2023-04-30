import {CARD_ACTION_TYPES} from "./card.types";
import {createAction} from "../../utils/reducer/reducer.utils";

const addCardItem = (cardItems, productToAdd) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? {...cardItem, quantity: cardItem.quantity + 1}
        : cardItem
    );
  }

  return [...cardItems, {...productToAdd, quantity: 1}];
};

const removeCardItem = (cardItems, cardItemToRemove) => {
  // find the cart item to remove
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === cardItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== cardItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cardItems.map((cardItem) =>
    cardItem.id === cardItemToRemove.id
      ? {...cardItem, quantity: cardItem.quantity - 1}
      : cardItem
  );
};
/*const clearCardItem = (cardItems, cardItemToClear) =>
  cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);*/

export const setIsCardOpen = (boolean) =>
  createAction(CARD_ACTION_TYPES.SET_IS_CARD_OPEN, boolean);

export const addItemToCard = (cardItems, productToAdd) => {
  const newCardItems = addCardItem(cardItems, productToAdd);
  return createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, newCardItems);
};

export const removeItemFromCard = (cardItems, cardItemToRemove) => {
  const newCardItems = removeCardItem(cardItems, cardItemToRemove);
  return createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, newCardItems);
};

export const clearItemFromCard = (cardItems, cardItemToClear) => {
  const newCardItems = clearCardItem(cardItems, cardItemToClear);
  return createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, newCardItems);
};

export const clearDropdown = (cardItems, cardItemToClear) => {
  const newCardItems = clearCardItem(cardItems, cardItemToClear);
  return createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, newCardItems);
};
export const clearCardItem = (cardItems, cardItemToClear) => {
  if (!cardItems) {
    return [];
  }

  if (!cardItemToClear) {
    return cardItems;
  }

  return cardItems.filter((item) => item.id !== cardItemToClear.id);
};
