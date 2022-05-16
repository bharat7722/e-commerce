// step 1
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllProductReducer,
  getSingleProductReducer,
} from "./reducers/product-reducer";
import { cartReducer } from "./reducers/cart-reducer";
// default asel tar without {} bracket
// default nasel tar with {} bracket
import { userLoginReducer } from "./reducers/auth-reducer";
import {
  userAddressReducer,
  userProfileReducer,
} from "./reducers/user-reducer";
import {
  getOrderHistoryReducer,
  userOrderReducer,
} from "./reducers/order-reducer";
import {
  deliveredOrderReducer,
  getAllAdminOrdersReducer,
} from "./reducers/admin-reducer";
// step 2
const rootReducer = combineReducers({
  // after done with code in product-reducer.js now come here and add below entries
  products: getAllProductReducer,
  singleProduct: getSingleProductReducer,
  cart: cartReducer,
  user: userLoginReducer,
  profile: userProfileReducer,
  address: userAddressReducer,
  order: userOrderReducer,
  getAllOrders: getOrderHistoryReducer,
  getAllAdminOrders: getAllAdminOrdersReducer,
  deliveredOrder: deliveredOrderReducer,
});

const cartFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;

const initial = {
  cart: {
    cartItem: cartFromLocalStorage,
  },
  user: {
    userInfo: userInfoFromLocalStorage,
  },
};

// step 3
const store = createStore(
  rootReducer,
  initial,
  composeWithDevTools(applyMiddleware(thunk))
);

// step 4
export default store;
// after this go to index.js file and import store there
