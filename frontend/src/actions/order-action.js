import axios, { Axios } from "axios";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_HISTORY_FAIL,
} from "../constants/order-constant";

export const userOrderAction =
  (orderCredentials) => async (dispatch, getState) => {
    console.log(orderCredentials);
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
      const { data } = await axios.post(
        "http://localhost:5000/api/order",
        orderCredentials
      );
      console.log("aaaaaaa");
      console.log(data.result);
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data.result,
      });
    } catch (error) {
      dispatch({ type: CREATE_ORDER_FAIL, payload: error });
    }
  };

export const getOrderHistoryAction = () => async (dispatch) => {
  console.log("aoooooooooooo");
  try {
    dispatch({ type: ORDER_HISTORY_REQUEST });
    const { token } = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        authorization: token,
      },
    };
    console.log(token);
    const { data } = await axios.get("http://localhost:5000/api/order", config);
    console.log(data);
    dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: ORDER_HISTORY_FAIL, payload: error });
  }
};
