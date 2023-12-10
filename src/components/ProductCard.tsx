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
      }}
    >
      <Image src={product.imageUrl}></Image>
      <CardBody>
        <Heading fontSize="l">{product.title}</Heading>
        <Text paddingTop="15px">{product.price}</Text>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
