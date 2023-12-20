import { Input, SimpleGrid, Text } from "@chakra-ui/react";
import UseProducts from "../hooks/UseProducts";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductGrid = () => {
  const { products, error } = UseProducts("online-shop");

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      {" "}
      {error && <Text>{error}</Text>}
      <div>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          _placeholder={{ color: "inherit" }}
          placeholder="Search"
          marginBottom={10}
          color="teal"
          width="500px"
          background={"white"}
        />
      </div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {products
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
