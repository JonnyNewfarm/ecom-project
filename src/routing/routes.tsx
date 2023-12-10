import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import ProductDetailsPage from "./ProductDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products/:id", element: <ProductDetailsPage /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
