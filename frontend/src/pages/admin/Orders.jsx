import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adminGetAllOrdersAction,
  orderDeliveredAction,
} from "../../actions/admin-action";

export default function Orders() {
  const [isDeliveredId, setisDeliveredId] = useState();
  const dispatch = useDispatch();
  const { isLoading, orderHistory, orderHistoryError } = useSelector(
    (state) => state.getAllAdminOrders
  );
  const handleDeliveredOrder = (id) => {
    console.log(id);
    setisDeliveredId(id);
  };
  const handleFinalOrderDelivered = () => {
    dispatch(orderDeliveredAction(isDeliveredId));
  };
  useEffect(() => {
    dispatch(adminGetAllOrdersAction());
  }, []);

  return (
    <div className="container">
      {JSON.stringify(orderHistory)}
      <div className="row">
        {orderHistory && orderHistory.length > 0 ? (
          orderHistory.map((order) => (
            <div className="col-sm-12">
              <div
                className={
                  order.delivered ? "card mt-4 border-success" : "card mt-4 "
                }
              >
                <div className="card-header d-flex justify-content-between">
                  {order._id}
                  <span className="fw-bold">
                    {order.delivered ? "delivered" : "In progress"}
                  </span>
                </div>
                {/* {JSON.stringify(order.products)} */}
                <div className="card-body">
                  <ul className="list-group">
                    {order.products.map((product) => (
                      <li className="list-group-item d-flex align-items-center justify-content-between">
                        <div>{order.userId.name}</div>
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
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => handleDeliveredOrder(order._id)}
                        >
                          Edit
                        </button>
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

      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Admin Product Delivered Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">Please Confirm Your Order</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleFinalOrderDelivered()}
              >
                Order Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
