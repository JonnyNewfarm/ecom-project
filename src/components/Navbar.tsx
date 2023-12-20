import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
  background,
  useDisclosure,
} from "@chakra-ui/react";
import react from "../assets/react.svg";

import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShopContext";
import { CartItem } from "./CartItem";

const Navbar = () => {
  const { cartQuantity, cartItems } = useShoppingCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack>
      <NavLink to="/">
        <Image src={react} boxSize="60px" />
      </NavLink>
      <NavLink to="/contact">Contacts</NavLink>

      <Button colorScheme="teal" onClick={onOpen}>
        Cart | Amount: {cartQuantity}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your items</DrawerHeader>

          <DrawerBody>
            <VStack>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
