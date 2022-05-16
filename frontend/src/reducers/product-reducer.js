import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
} from "../constants/product-constants";

export const getAllProductReducer = (
  state = { reduxProduct: [] },
  { type, payload }
) => {
  switch (type) {
    case ALL_PRODUCT_REQUEST:
      return { reduxProduct: [], isLoding: true };
    case ALL_PRODUCT_SUCCESS:
      return { reduxProduct: payload, isLoding: false };
    case ALL_PRODUCT_FAIL:
      return { reduxProductError: payload, isLoding: false };

    default:
      return state;
  }
};

export const getSingleProductReducer = (
  state = { reduxSingleProduct: {} },
  { type, payload }
) => {
  switch (type) {
    case SINGLE_PRODUCT_REQUEST:
      return { reduxSingleProduct: {}, isLoding: true };
    case SINGLE_PRODUCT_SUCCESS:
      return { reduxSingleProduct: payload, isLoding: false };
    case SINGLE_PRODUCT_FAIL:
      return { reduxSingleProductError: payload, isLoding: false };

    default:
      return state;
  }
};
