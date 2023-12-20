import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import ProductDetailsPage from "./ProductDetailsPage";
import Cart from "./Cart";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products/:id", element: <ProductDetailsPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <Cart /> },
]);

export default router;
