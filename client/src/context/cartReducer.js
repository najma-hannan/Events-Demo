export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      console.log("Payload:", action.payload);
      return {
        ...state,
        cartItems: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};
