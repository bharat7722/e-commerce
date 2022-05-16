import axios from "axios";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_TO_CART,
} from "../constants/cart-constant";
export const cartAction = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    console.log({ ...data.result, qty });
    dispatch({ type: ADD_TO_CART, payload: { ...data.result, qty } });
    const x = getState().cart.cartItem;
    localStorage.setItem("cartItem", JSON.stringify(x));
  } catch (error) {}
};
export const removeFromCartAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_TO_CART, payload: id });
    const x = getState().cart.cartItem;
    localStorage.setItem("cartItem", JSON.stringify(x));
  } catch (error) {}
};
export const emptyCartAction = () => async (dispatch) => {
  try {
    dispatch({ type: EMPTY_CART });
    localStorage.setItem("cartItem", JSON.stringify([]));
  } catch (error) {}
};
