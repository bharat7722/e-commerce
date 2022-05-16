import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../actions/auth-action";

export default function Logout({ history }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [count, setcount] = useState(5);
  useEffect(() => {
    if (userInfo) {
      dispatch(userLogoutAction());
      setTimeout(() => {
        clearInterval(rem);
        history.push("/login");
      }, 5000);
      const rem = setInterval(() => {
        setcount((pre) => pre - 1);
      }, 1000);
    } else {
      history.push("/login");
    }
  }, []);

  return <h1>You will be redirect in next {count} sec</h1>;
}
