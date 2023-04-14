import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter} from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuth } from "./features/thunks/FetchUsers";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/molecules/Navbar"
import ProductDescriptionForm from "./components/molecules/ProductDescriptionForm";
import Form from "./components/molecules/Form";
import InputForm from "./components/molecules/InputForm";
import Slidebar from "./components/molecules/Slidebar";
import CreateProduct from "./components/molecules/CreateProduct";
import CreateClient from "./components/molecules/CreateClient";
import Product from "./pages/Product";
import AllForms from "./pages/AllForms";
import SummaryForm from "./components/molecules/SummaryForm";
import ClientDashBoard from "./components/molecules/ClientDashBoard";
import QuotationForm from "./components/molecules/quatation/QuotationForm";
import QuotationList from "./components/molecules/quatation/QuotationList";
import CreateCategory from "./components/molecules/category/CreateCategory";
import CategoryList from "./components/molecules/category/CategoryList";
import CategoryDescriptionList from "./components/molecules/category/CategoryDescriptionList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <BrowserRouter>
      <Slidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/all-forms/:id" element={<AllForms />} />
          <Route path="/quotations" element={<QuotationList />} />
          <Route path="/category-create" element={<CreateCategory />} />
          <Route path="/category-description-list" element={<CategoryDescriptionList />} />
          <Route path="/category-list" element={<CategoryList />} />



          <Route path="/summary" element={<SummaryForm />} />
          <Route path="/client-table" element={<ClientDashBoard />} />

          <Route path="/quotation-form" element={<QuotationForm />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/create-client" element={<CreateClient />} />

          <Route path="/slidebar" element={<Slidebar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
