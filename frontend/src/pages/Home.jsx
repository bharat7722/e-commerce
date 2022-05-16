import React, { useEffect, useState } from "react";
// after complete action code then this is your step 1
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../actions/product-action";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const dispatch = useDispatch();
  const { reduxProduct: state, isLoading } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {state.map((item, i) => {
            return (
              <div className="col-md-4 mt-5" key={item._id}>
                <ProductCard single={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
