import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistoryAction } from "../actions/order-action";

export default function OrderHistory() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.getAllOrders);

  useEffect(() => {
    dispatch(getOrderHistoryAction());
  }, []);

  return (
    <div className="container">
      {JSON.stringify(orders)}

      <div className="row">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div className="col-sm-12">
              <div
                className={
                  orders.delivered ? "card mt-4 border-success" : "card mt-4 "
                }
              >
                <div className="card-header d-flex justify-content-between">
                  {order._id}
                  <span className="fw-bold">
                    {order.delivered ? "delivered" : "In progress"}
                  </span>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {order.products.map((product) => (
                      <li className="list-group-item d-flex align-items-center justify-content-between">
                        <div>
                          <img
                            src={`http://localhost:5000/${product.productId.image}`}
                            height="50"
                            alt=""
                          />
                          {product.productId.name}
                        </div>
                        <span>
                          {product.qty} X {product.productId.price}
                        </span>
                        <b>{product.qty * product.productId.price} </b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No Orders Found</h1>
        )}
      </div>
    </div>
  );
}
