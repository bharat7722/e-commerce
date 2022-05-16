import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { userProfileAction } from "../actions/user-action";

export default function Profile({ history }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);
  console.log(profile);
  useEffect(() => {
    userInfo ? dispatch(userProfileAction()) : history.push("/");
  }, []);

  return (
    <div className="container">
      {JSON.stringify(profile)}
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div
            className="card"
            style={
              profile?.isAdmin
                ? { backgroundColor: "red" }
                : { backgroundColor: "blue" }
            }
          >
            <div className="card-header"></div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  Name : <span>{profile?.name}</span>
                </li>
                <li className="list-group-item">
                  Email : <span>{profile?.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
