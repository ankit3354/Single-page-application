import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";
import {
  Home,
  PasswordGenerator,
  CurrencyConvertor,
  Calculator,
  ApiPage,
  Projects,
  Skill,
  React_Cards,
} from "./components";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/currencyconverter" element={<CurrencyConvertor />} />
      <Route path="/passwordgenerator" element={<PasswordGenerator />} />
      <Route path="/reactcards" element={<React_Cards />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/apipage" element={<ApiPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
