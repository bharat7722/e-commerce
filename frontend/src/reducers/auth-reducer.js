import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
} from "../constants/auth-constant";

export const userLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { userInfo: payload, isLoading: false };
    case USER_LOGIN_FAIL:
      return { userInfoError: payload, isLoading: false };
    case USER_LOGIN_LOGOUT:
      return {};

    default:
      return state;
  }
};
