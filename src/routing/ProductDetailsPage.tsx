import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import UseProduct from "../hooks/useProduct";
import { StarIcon } from "@chakra-ui/icons";
import { useShoppingCart } from "../context/ShopContext";
const primaryCol = "#170542";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products: product, error } = UseProduct("online-shop/" + id);

  const { increaseCartQuantity } = useShoppingCart();

  return (
    <>
      {error && <Text>{error}</Text>}
      {product && (
        <>
          <Flex justifyContent="center" marginTop="60px">
            <Heading size="xl" as="h2" color={primaryCol}>
              {product.title}
            </Heading>
          </Flex>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            marginTop={100}
            width={{ sm: "100%", lg: "80%" }}
            marginLeft="auto"
            marginRight="auto"
          >
            <Image
              objectFit="cover"
              width={{ lg: "400px", md: "350px", sm: "200px" }}
              src={product.imageUrl}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">Details</Heading>

                <Text py="2">{product.description}</Text>
                <Text py="2">Price: {product.discountedPrice}</Text>

                <Text py="2">
                  Rating: {product.rating} <StarIcon paddingBottom={1} />
                </Text>
                <Text>
                  Discount: {product.price - product.discountedPrice} $
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  bg="#2c1e73"
                  color="white"
                  _hover={{ bg: "#4938a1" }}
                  onClick={() => increaseCartQuantity(product.id)}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
