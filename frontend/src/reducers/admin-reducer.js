import {
  ADMIN_ORDER_HISTORY_REQUEST,
  ADMIN_ORDER_HISTORY_SUCCESS,
  ADMIN_ORDER_HISTORY_FAIL,
  ADMIN_ORDER_DELIVERED_REQUEST,
  ADMIN_ORDER_DELIVERED_SUCCESS,
  ADMIN_ORDER_DELIVERED_FAIL,
} from "../constants/order-constant";
export const getAllAdminOrdersReducer = (
  state = { orderHistory: [] },
  { type, payload }
) => {
  switch (type) {
    case ADMIN_ORDER_HISTORY_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_ORDER_HISTORY_SUCCESS:
      return { ...state, orderHistory: payload, isLoading: false };
    case ADMIN_ORDER_HISTORY_FAIL:
      return { ...state, orderHistoryError: payload, isLoading: false };

    default:
      return state;
  }
};
export const deliveredOrderReducer = (
  state = { orderDelivered: {} },
  { type, payload }
) => {
  switch (type) {
    case ADMIN_ORDER_DELIVERED_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_ORDER_DELIVERED_SUCCESS:
      return { ...state, orderDelivered: payload, isLoading: false };
    case ADMIN_ORDER_DELIVERED_FAIL:
      return { ...state, orderDeliveredError: payload, isLoading: false };

    default:
      return state;
  }
};
