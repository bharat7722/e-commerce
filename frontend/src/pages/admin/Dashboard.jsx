import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard({ history }) {
  const { userInfo } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    if (!profile?.isAdmin) {
      history.push("/login");
    }
  }, []);

  return <div>Dashboard</div>;
}
