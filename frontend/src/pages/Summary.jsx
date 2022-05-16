import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCartAction } from "../actions/cart-action";
import { userOrderAction } from "../actions/order-action";
import { userProfileAction } from "../actions/user-action";

export default function Summary() {
  const { profile } = useSelector((state) => state.profile);
  const { cartItem } = useSelector((state) => state.cart);
  const { userOrderItem } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const handleOrderSummary = () => {
    const formData = cartItem.map((item) => {
      return { productId: item._id, qty: item.qty };
    });
    dispatch(userOrderAction({ products: [...formData], userId: profile.id }));
    dispatch(emptyCartAction());
  };
  useEffect(() => {
    if (!profile) {
      // console.log("no profile");
      dispatch(userProfileAction());
    }
  }, []);

  return (
    <div>
      Summary
      {JSON.stringify(profile)}
      {/* {JSON.stringify(profile?.address)} */}
      {/* {JSON.stringify(cartItem)}
      {JSON.stringify(userOrderItem)} */}
      {profile && (
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <div className="card">
                <div className="card-header alert-info">User Info</div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">{profile.name}</li>
                    <li className="list-group-item">{profile.email}</li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-header alert-success">Cart Info</div>
                <div className="card-body">
                  <ul className="list-group">
                    {cartItem.map((item) => (
                      <li className="list-group-item d-flex justify-content-between">
                        {item.name}
                        <span>
                          {item.price} * {item.qty} = {item.price * item.qty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-header alert-success">Cart Info</div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      {"House No" + profile.address.houseNo}
                    </li>
                    <li className="list-group-item">
                      {"Street" + profile.address.street}
                    </li>
                    <li className="list-group-item">
                      {"Pin" + profile.address.pin}
                    </li>
                    <li className="list-group-item">
                      {"city" + profile.address.city}
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/order-success"
                className="btn btn-success"
                onClick={handleOrderSummary}
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
