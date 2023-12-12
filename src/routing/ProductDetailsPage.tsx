import { SimpleGrid, Text } from "@chakra-ui/react";
import UseProducts from "../hooks/UseProducts";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import UseProduct from "../hooks/useProduct";
import Navbar from "../components/Navbar";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products: product, error } = UseProduct("online-shop/" + id);

  return (
    <>
      <Navbar></Navbar> {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {product && (
          <>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </>
        )}
      </SimpleGrid>
    </>
  );
};

export default ProductDetailsPage;
