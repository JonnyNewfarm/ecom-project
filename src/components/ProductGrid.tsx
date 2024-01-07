import { Flex, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import UseProducts from "../hooks/UseProducts";
import ProductCard from "./ProductCard";
import { useState } from "react";
const primaryCol = "#170542";

const ProductGrid = () => {
  const { products, error } = UseProducts("online-shop");

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      {" "}
      {error && <Text>{error}</Text>}
      <div>
        <Flex justifyContent="center">
          <Heading
            color={primaryCol}
            paddingBottom={10}
            marginLeft="auto"
            marginRight="auto"
          >
            Products
          </Heading>
        </Flex>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          variant="outline"
          focusBorderColor="#2c1e73"
          bg={"white"}
          placeholder="Search"
          marginBottom={7}
          width="500px"
          borderRadius={20}
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
