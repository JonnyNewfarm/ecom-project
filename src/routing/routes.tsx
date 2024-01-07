import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import ProductDetailsPage from "./ProductDetailsPage";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
