import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/auth-action";
import { userProfileAction } from "../actions/user-action";
export default function Login({ history }) {
  // "akash@skillhubapp.com"
  // "123"
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { cartItem } = useSelector((state) => state.cart);
  const [error, seterror] = useState({
    email: "",
    password: "",
  });
  const loginUser = (e) => {
    e.preventDefault();
    console.warn(email, password);
    if (email === "") {
      seterror((pre) => {
        return { ...pre, email: "Please Enter Email" };
      });
    }
    if (password === "") {
      seterror((pre) => {
        return { ...pre, password: "Please Enter Password" };
      });
    }
    if (email !== "" && password !== "") {
      dispatch(userLoginAction({ email, password }));
    }
  };
  useEffect(() => {
    // userInfo && history.push("/checkout");
    if (userInfo) {
      dispatch(userProfileAction());
      cartItem.length > 0 ? history.push("/checkout") : history.push("/");
    }
  }, [userInfo]);
  const handleError = () => {
    if (email !== "") {
      seterror((pre) => {
        return { ...pre, email: "" };
      });
    } else {
      seterror((pre) => {
        return { ...pre, email: "Please Enter Email" };
      });
    }
  };
  return (
    <div className="container">
      {/* {JSON.stringify(userInfo)} */}
      {JSON.stringify(error)}
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={loginUser}>
                <input
                  type="text"
                  className={
                    error.email
                      ? "form-control is-invalid mt-3"
                      : "form-control mt-3"
                  }
                  placeholder="Enter Email"
                  onKeyUp={handleError}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                />
                <span className="invalid-feedback">{error.email}</span>
                <input
                  type="password"
                  className={
                    error.password
                      ? "form-control is-invalid mt-3"
                      : "form-control mt-3"
                  }
                  placeholder="Enter Password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
                <span className="invalid-feedback">{error.password}</span>
                <button
                  className="btn btn-success btn-lg w-100 mt-3"
                  // disabled={email == "" || password == ""}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
