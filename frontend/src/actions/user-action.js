import axios from "axios";
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_ADDRESS_REQUEST,
  USER_ADDRESS_SUCCESS,
  USER_ADDRESS_FAIL,
} from "../constants/user-constant";
export const userProfileAction = () => async (dispatch, getState) => {
  try {
    // console.log("Aaa");
    dispatch({ type: USER_PROFILE_REQUEST });
    const config = {
      headers: {
        Authorization: getState().user.userInfo.token,
      },
    };
    console.log(config);
    const { data } = await axios.get(
      "http://localhost:5000/api/user/profile",
      config
    );
    console.log(data);
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: USER_PROFILE_FAIL, payload: "error" + error });
  }
};
export const userAddressAction =
  (addressInfo) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_ADDRESS_REQUEST });
      const config = {
        headers: {
          Authorization: getState().user.userInfo.token,
        },
      };
      console.log(config);
      const { data } = await axios.post(
        "http://localhost:5000/api/user/address",
        addressInfo,
        config
      );
      console.log(data.result);
      dispatch({ type: USER_ADDRESS_SUCCESS, payload: data.result });
    } catch (error) {
      dispatch({ type: USER_ADDRESS_FAIL, payload: error });
    }
  };
