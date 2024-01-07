import { Button, Image, Text, VStack } from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShopContext";
import UseProducts from "../hooks/UseProducts";
import { Link } from "react-router-dom";

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { products } = UseProducts("online-shop");
  const { removeFromCart } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  const primaryCol = "#170542";

  return (
    <VStack spacing={2}>
      <Text>
        {item.title}{" "}
        {quantity > 1 && (
          <span style={{ fontSize: "0.85rem" }}>{quantity}x</span>
        )}
      </Text>

      <Image src={item.imageUrl} alt="" />
      <Text>Price: ${item.price}</Text>
      <Button color="red" onClick={() => removeFromCart(item.id)}>
        Remove
      </Button>

      <Text fontSize={20} fontWeight="bolder" marginTop="30%">
        Total: ${item.price * quantity}
      </Text>

      <Link
        to=""
        style={{
          background: primaryCol,
          color: "white",
          paddingRight: "15px",
          paddingLeft: "15px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "15px",
        }}
      >
        Check out
      </Link>
    </VStack>
  );
}
