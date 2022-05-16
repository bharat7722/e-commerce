import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_TO_CART,
} from "../constants/cart-constant";
export const cartReducer = (state = { cartItem: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // below line is same as push operation in array so this is basically destructuring of array
      const exist = state.cartItem.find((item) => item._id === payload._id);
      if (exist) {
        return {
          cartItem: state.cartItem.map((item) =>
            item._id === exist._id ? payload : item
          ),
        };
      } else {
        return { cartItem: [...state.cartItem, payload] };
      }
    case REMOVE_TO_CART:
      return {
        cartItem: state.cartItem.filter((item) => {
          return item._id !== payload;
        }),
      };
    case EMPTY_CART:
      return {
        cartItem: [],
      };
    default:
      return state;
  }
};
