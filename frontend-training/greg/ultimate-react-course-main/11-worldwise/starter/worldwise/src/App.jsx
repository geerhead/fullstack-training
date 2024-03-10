import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout.jsx";
import Homepage from "../pages/Homepage.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Pricing from "../pages/Pricing.jsx";
import Product from "../pages/Product.jsx";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />}></Route>
        <Route path="product" element={<Product />} />
        <Route path={"pricing"} element={<Pricing />}></Route>
        <Route path={"app"} element={<AppLayout />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
