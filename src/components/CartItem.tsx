import { Button, Image, Text, VStack } from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShopContext";
import UseProducts from "../hooks/UseProducts";

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { products } = UseProducts("online-shop");
  const { removeFromCart } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

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
      <Text fontSize={20} fontWeight="bolder">
        Total: ${item.price * quantity}
      </Text>
    </VStack>
  );
}
