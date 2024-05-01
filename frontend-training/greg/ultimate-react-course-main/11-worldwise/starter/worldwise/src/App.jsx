import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "../pages/AppLayout.jsx";
import CountryList from "../components/CountryList.jsx";
import Homepage from "../pages/Homepage.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Pricing from "../pages/Pricing.jsx";
import Product from "../pages/Product.jsx";
import CityList from "../components/CityList.jsx";
import City from "../components/City.jsx";
import Form from "../components/Form.jsx";
import {CitiesProvider} from "../contexts/CitiesContext.jsx";

export default function App() {

  return (
  <CitiesProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="product" element={<Product />} />
        <Route path={"pricing"} element={<Pricing />}></Route>
        <Route path={"app"} element={<AppLayout />}>
          <Route index element={<Navigate replace to={'cities'}/>}/>
          <Route path={"cities"} element={<CityList/>}/>
          <Route path={'cities/:id'} element={<City />}/>
          <Route path={"countries"} element={<CountryList/>}/>
          <Route path={"form"} element={<Form />}/>
        </Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </CitiesProvider>
  );
}
