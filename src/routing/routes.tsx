import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import ProductDetailsPage from "./ProductDetailsPage";

import Navbar from "../components/Navbar";
import Layout from "./Layout";
import { Checkout } from "./Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "contact", element: <Contact /> },

      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
