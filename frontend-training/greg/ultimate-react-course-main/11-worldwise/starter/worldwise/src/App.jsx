import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "../pages/Product.jsx";
import Homepage from "../pages/Homepage.jsx";
import Pricing from "../pages/Pricing.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />}></Route>
        <Route path="product" element={<Product />} />
        <Route path={"pricing"} element={<Pricing />}></Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
