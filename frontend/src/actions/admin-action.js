import axios from "axios";
import {
  ADMIN_ORDER_HISTORY_REQUEST,
  ADMIN_ORDER_HISTORY_SUCCESS,
  ADMIN_ORDER_HISTORY_FAIL,
  ADMIN_ORDER_DELIVERED_REQUEST,
  ADMIN_ORDER_DELIVERED_SUCCESS,
  ADMIN_ORDER_DELIVERED_FAIL,
} from "../constants/order-constant";

export const adminGetAllOrdersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_ORDER_HISTORY_REQUEST });
    const config = {
      headers: {
        authorization: getState().user.userInfo.token,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/api/order/admin-orders",
      config
    );

    dispatch({
      type: ADMIN_ORDER_HISTORY_SUCCESS,
      payload: data.result,
    });
  } catch (error) {
    dispatch({ type: ADMIN_ORDER_HISTORY_FAIL, payload: error });
  }
};
export const orderDeliveredAction =
  (isDeliveredId) => async (dispatch, getState) => {
    console.log(isDeliveredId);
    try {
      dispatch({ type: ADMIN_ORDER_DELIVERED_REQUEST });
      const config = {
        headers: {
          authorization: getState().user.userInfo.token,
        },
      };
      console.log(config);
      const { data } = await axios.put(
        `http://localhost:5000/api/order/delivered-order/${isDeliveredId}`,
        { delivered: true },
        config
      );
      dispatch({
        type: ADMIN_ORDER_DELIVERED_SUCCESS,
        payload: data.result,
      });
    } catch (error) {
      dispatch({ type: ADMIN_ORDER_DELIVERED_FAIL, payload: error });
    }
  };
