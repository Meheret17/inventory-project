import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./screens/Root";
import "bulma/css/bulma.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import ErrorPage from "./error-page";
import Product, { loader as productLoader } from "./screens/Product";
import { loader as productsLoader } from "./components/ProductsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsLoader,
      },
      {
        path: "/:id",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
