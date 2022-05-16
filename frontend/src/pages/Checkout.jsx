import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAddressAction, userProfileAction } from "../actions/user-action";
import { Link } from "react-router-dom";

export default function Checkout({ history }) {
  const { cartItem } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  const [houseNo, sethouseNo] = useState("123");
  const [street, setstreet] = useState("fake streat");
  const [pin, setpin] = useState("431003");
  const [city, setcity] = useState("Aurangabad");
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.address);
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    if (userInfo) {
      if (!profile?.address) {
        dispatch(userProfileAction());
      }
      cartItem.length > 0 ? history.push("/checkout") : history.push("/");
    } else {
      history.push("/");
    }
  }, []);
  const handleAddress = (e) => {
    e.preventDefault();
    dispatch(userAddressAction({ houseNo, street, pin, city }));
  };

  return (
    <div className="container">
      {JSON.stringify(profile)}
      {profile?.address ? (
        <div className="container">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              checked
              name=""
              id="cod"
            />
            <label htmlFor="cod">Pay via COD</label>
          </div>
          <Link to="/summary" className="btn btn-outline-dark">
            Checkout
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">CheckOut Form</div>
              <div className="card-body">
                <form onSubmit={handleAddress}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ghar no"
                    value={houseNo}
                    onChange={(e) => sethouseNo(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="streat"
                    value={street}
                    onChange={(e) => setstreet(e.target.value)}
                  />
                  <input
                    type="number"
                    className="form-control mt-3"
                    placeholder="pincode"
                    value={pin}
                    onChange={(e) => setpin(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="city"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                  <button className="btn btn-success w-100 mt-3" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
