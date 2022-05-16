import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../actions/auth-action";

export default function Navbar({ history }) {
  const dispatch = useDispatch();
  const { cartItem: state } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SkillShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarID"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-link active" to={"/cart"}>
                <button className="btn btn-light">
                  Cart
                  <div className="badge text-dark">
                    {state.reduce((acc, item) => {
                      return acc + +item.qty;
                    }, 0)}
                  </div>
                </button>
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  >
                    {userInfo.name}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {profile?.isAdmin ? (
                      <div>
                        <li>
                          <Link className="btn btn-dark" to={"/dashboard"}>
                            DashBoard
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="btn btn-dark mt-2"
                            to={"/add-product"}
                          >
                            Add Product
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="btn btn-dark mt-2"
                            to={"/adminOrders"}
                          >
                            Admin Orders
                          </Link>
                        </li>
                      </div>
                    ) : null}
                    <li>
                      <Link className="btn btn-dark mt-2" to={"/profile"}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-dark mt-2" to={"/order-history"}>
                        Order
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-dark mt-2" to={"/logout"}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link className="nav-link" to={"/login"}>
                  <button className="btn btn-light">Login</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
