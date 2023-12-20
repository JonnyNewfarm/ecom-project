import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import UseProduct from "../hooks/useProduct";
import Navbar from "../components/Navbar";
import { StarIcon } from "@chakra-ui/icons";
import { useShoppingCart } from "../context/ShopContext";
import UseProducts from "../hooks/UseProducts";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products: product, error } = UseProduct("online-shop/" + id);
  const { products: ting } = UseProducts("online-shop");

  const { increaseCartQuantity } = useShoppingCart();

  return (
    <>
      <Navbar></Navbar> {error && <Text>{error}</Text>}
      {product && (
        <>
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
                <Heading size="md">{product.title}</Heading>

                <Text py="2">{product.description}</Text>
                <Text py="2" as="del">
                  Before: {product.price}
                </Text>
                <Text py="2">Now: {product.discountedPrice}</Text>

                <Text py="2">
                  Rating: {product.rating} <StarIcon paddingBottom={1} />
                </Text>
                <Text></Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
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
