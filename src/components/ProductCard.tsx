import React from "react";
import { Products } from "../hooks/UseProducts";
import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  product: Products;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      borderRadius={8}
      overflow="hidden"
      background=""
      _hover={{
        transform: "scale(1.04)",
        transition: "0.2s",
        cursor: "pointer",
      }}
    >
      <Link to={`/products/${product.id}`}>
        <Image
          src={product.imageUrl}
          height={{ lg: "450px", sm: "80%", md: "550px" }}
          objectFit="cover"
        ></Image>
        <CardBody>
          <Heading fontSize="l">{product.title}</Heading>
          <Text paddingTop="15px">Price: {product.price}$</Text>
          <Button colorScheme="blue" marginTop={5}>
            View more
          </Button>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProductCard;
