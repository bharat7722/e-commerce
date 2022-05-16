import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/admin/AddProduct";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import OrderHistory from "./pages/OrderHistory";
import OrderSuccess from "./pages/OrderSuccess";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Summary from "./pages/Summary";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path={"/"} exact component={Home}></Route>
      {/* below syntax for dynamic routing */}
      <Route path={"/product/:id?"} component={Product}></Route>
      <Route path={"/cart/:id?"} component={Cart}></Route>
      <Route path={"/login"} component={Login}></Route>
      <Route path={"/checkout"} component={Checkout}></Route>
      <Route path={"/logout"} component={Logout}></Route>
      <Route path={"/profile"} component={Profile}></Route>
      <Route path={"/summary"} component={Summary}></Route>
      <Route path={"/order-success"} component={OrderSuccess}></Route>
      <Route path={"/order-history"} component={OrderHistory}></Route>
      <Route path={"/dashboard"} component={Dashboard}></Route>
      <Route path={"/add-product"} component={AddProduct}></Route>
      <Route path={"/adminOrders"} component={Orders}></Route>
    </BrowserRouter>
  );
}

export default App;
