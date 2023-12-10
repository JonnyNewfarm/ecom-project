import { SimpleGrid, Text } from "@chakra-ui/react";
import UseProducts from "../hooks/UseProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products, error } = UseProducts("online-shop");

  return (
    <>
      {" "}
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
