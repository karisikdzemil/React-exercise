import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const currentIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const updatedItems = [...state.items];

    if (currentIndex > -1) {
      const existingItem = state.items[currentIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItem[currentIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const currentIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const removingItem = state.items[currentIndex];

    const updatedItems = [...state.items];
    if (removingItem.quantity === 1) {
      updatedItems.splice(currentIndex, 1);
    } else {
      const updatedItem = {
        ...removingItem,
        quantity: removingItem.quantity - 1,
      };
      updatedItems[currentIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContext)
  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;