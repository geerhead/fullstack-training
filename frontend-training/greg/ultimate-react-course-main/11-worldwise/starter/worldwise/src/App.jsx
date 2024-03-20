import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout.jsx";
import CountryList from "../components/CountryList.jsx";
import Form from "../components/Form.jsx";
import Homepage from "../pages/Homepage.jsx";
import Login from "../pages/Login.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Pricing from "../pages/Pricing.jsx";
import Product from "../pages/Product.jsx";
import CityList from "../components/CityList.jsx";
import City from "../components/City.jsx";
import { useState, useEffect } from "react";

const BASE_URL = 'http://localhost:8000'

export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(function() {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading the data...")
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities();
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="product" element={<Product />} />
        <Route path={"pricing"} element={<Pricing />}></Route>
        <Route path={"app"} element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading} />}/>
          <Route path={"cities"} element={<CityList  cities={cities} isLoading={isLoading} />}/>
          <Route path={'cities/:id'} element={<City />}/>
          <Route path={"countries"} element={<CountryList cities={cities} isLoading={isLoading}/>}/>
          <Route path={"form"} element={<Form />}/>
        </Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
