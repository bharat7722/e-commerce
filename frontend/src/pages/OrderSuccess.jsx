import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="container">
      <h1>Order Success</h1>
      <Link to={"/order-history"} className="btn btn-success">
        Manage Order
      </Link>
      <Link to={"/profile"} className="btn btn-outline-success">
        Profile
      </Link>
    </div>
  );
}
