import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/TodoList/app/store";
import {
  Home,
  PasswordGenerator,
  TodoList,
  CurrencyConvertor,
  Calculator,
  ApiPage,
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
      <Route path="/passwordgenerator" element={<PasswordGenerator />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/currencyconverter" element={<CurrencyConvertor />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/apipage" element={<ApiPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
