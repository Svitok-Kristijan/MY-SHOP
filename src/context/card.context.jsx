/*import {createContext, useState, useReducer} from "react";

import {createAction} from "../utils/reducer/reducer.utils";

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

const CARD_ACTION_TYPES = {
  SET_IS_CARD_OPEN: "SET_IS_CARD_OPEN",
  SET_CARD_ITEMS: "SET_CARD_ITEMS",
  SET_CARD_COUNT: "SET_CARD_COUNT",
  SET_CARD_TOTAL: "SET_CARD_TOTAL",
};

const INITIAL_STATE = {
  isCardOpen: false,
  cardItems: [],
  cardCount: 0,
  cardTotal: 0,
};

const cardReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case CARD_ACTION_TYPES.SET_CARD_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cardReducer`);
  }
};

const clearCardItem = (cardItems, cardItemToClear) =>
  cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  clearItemFromCard: () => {},
  clearDropdown: () => {},
  cardCount: 0,
  cardTotal: 0,
});

export const CardProvider = ({children}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const [{cardCount, cardTotal, cardItems}, dispatch] = useReducer(
    cardReducer,
    INITIAL_STATE
  );

  const updateCardItemsReducer = (cardItems) => {
    const newCardCount = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );

    const newCardTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );

    const payload = {
      cardItems,
      cardCount: newCardCount,
      cardTotal: newCardTotal,
    };

    dispatch(createAction(CARD_ACTION_TYPES.SET_CARD_ITEMS, payload));
  };

  const addItemToCard = (productToAdd) => {
    const newCardItems = addCardItem(cardItems, productToAdd);
    updateCardItemsReducer(newCardItems);
  };

  const removeItemToCard = (cardItemToRemove) => {
    const newCardItems = removeCardItem(cardItems, cardItemToRemove);
    updateCardItemsReducer(newCardItems);
  };

  const clearItemFromCard = (cardItemToClear) => {
    const newCardItems = clearCardItem(cardItems, cardItemToClear);
    updateCardItemsReducer(newCardItems);
  };

  const clearDropdown = (cardItemToClear) => {
    const newCardItems = clearCardItem(cardItems, cardItemToClear);
    updateCardItemsReducer(newCardItems);
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    addItemToCard,
    removeItemToCard,
    clearItemFromCard,
    clearDropdown,
    cardItems,
    cardCount,
    cardTotal,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};*/
