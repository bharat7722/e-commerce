import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_HISTORY_FAIL,
} from "../constants/order-constant";

export const userOrderReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_ORDER_REQUEST:
      return { isLoading: true };
    case CREATE_ORDER_SUCCESS:
      return { userOrderItem: payload, isLoading: false };
    case CREATE_ORDER_FAIL:
      return { userOrderError: payload, isLoading: false };
    default:
      return state;
  }
};
export const getOrderHistoryReducer = (
  state = { orders: [] },
  { type, payload }
) => {
  switch (type) {
    case ORDER_HISTORY_REQUEST:
      return { ...state, isLoading: true };
    case ORDER_HISTORY_SUCCESS:
      return { orders: payload, isLoading: false };
    case ORDER_HISTORY_FAIL:
      return { ordersError: payload, isLoading: false };
    default:
      return state;
  }
};
