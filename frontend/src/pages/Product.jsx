import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../actions/product-action";

export default function Product({ match, history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProductAction(match.params.id));
  }, []);
  const {
    reduxSingleProduct: state,
    isLoding,
    reduxSingleProductError,
  } = useSelector((state) => state.singleProduct);
  const [qty, setqty] = useState(1);
  const decreaseItem = () => {
    setqty((pre) => pre - 1);
  };
  const increaseItem = () => {
    setqty((pre) => pre + 1);
  };
  const addToCart = () => {
    history.push(`/cart/${state._id}?quantity=${qty}`);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`http://localhost:5000/${state.image}`}
            alt=""
            className="img-fluid h-50 w-50"
          />
          <ul className="list-group">
            <li className="list-group-item">
              <strong>{state.name}</strong>
            </li>
            <li className="list-group-item">
              Price:<strong>{state.price}</strong>
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          {state.stock != 0 ? (
            <ul className="list-group">
              <li className="list-group-item">
                <strong className="me-2">Quantity</strong>
                <button
                  className="btn btn-dark"
                  onClick={() => decreaseItem()}
                  disabled={qty === 1 ? true : false}
                >
                  -
                </button>
                <strong className="ms-2 me-2">{qty}</strong>
                <button
                  className="btn btn-dark"
                  onClick={() => increaseItem()}
                  disabled={qty === state.stock ? true : false}
                >
                  +
                </button>
              </li>
            </ul>
          ) : (
            <li className="list-group-item">
              <strong>Out Of Stock</strong>
            </li>
          )}
          <li className="list-group-item">
            <button
              className="btn btn-danger"
              disabled={state.stock == 0 ? true : false}
              onClick={() => addToCart()}
            >
              Add to Cart
            </button>
          </li>
        </div>
      </div>
    </div>
  );
}
