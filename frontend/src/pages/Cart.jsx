import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, removeFromCartAction } from "../actions/cart-action";
import { Link } from "react-router-dom";
// this is how we access specific data from query string
export default function Cart({ location, match }) {
  const dispatch = useDispatch();
  const { cartItem: state } = useSelector((state) => state.cart);
  useEffect(() => {
    // location.search.split("=")[1] => this is quantity
    // match.params.id => this is product id which we want to addtocart
    location.search.split("=")[1] &&
      dispatch(cartAction(match.params.id, location.search.split("=")[1]));
  }, []);
  return (
    <div>
      {JSON.stringify(state)}
      <div className="container">
        {state.length > 0 ? (
          <div className="row">
            <div className="col-md-8">
              {state.map((item, i) => {
                return (
                  <div className="row" key={i}>
                    <div className="col-md-4">
                      <img src={item.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>{item.name}</strong>
                        </li>
                        <li className="list-group-item">
                          <strong>Qty : </strong>
                          {item.qty}
                        </li>
                        <li className="list-group-item">
                          <strong>Price : </strong>
                          {item.price}
                        </li>
                        <li className="list-group-item">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              return dispatch(removeFromCartAction(item._id));
                            }}
                          >
                            Remove
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">All Details</div>
                <div className="card-body">
                  <h5>
                    Deliverable Qty :
                    {state.reduce((acc, item) => {
                      return acc + +item.qty;
                    }, 0)}
                  </h5>
                  <h5>
                    Price :
                    {state.reduce((acc, item) => {
                      return acc + +item.qty * item.price;
                    }, 0)}
                  </h5>
                  <Link className="btn btn-primary" to={"/checkout"}>
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center alert alert-danger">Cart is Empty</div>
        )}
      </div>
    </div>
  );
}
