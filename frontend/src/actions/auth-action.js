import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
} from "../constants/auth-constant";

export const userLoginAction =
  (loginCredentials) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginCredentials
      );
      console.log("aaaaaaa");
      console.log(data.result);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { name: data.result, token: data.token },
      });
      localStorage.setItem(
        "userInfo",
        JSON.stringify(getState().user.userInfo)
      );
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL, payload: error });
    }
  };

export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: USER_LOGIN_LOGOUT });
  localStorage.removeItem("userInfo");
};
