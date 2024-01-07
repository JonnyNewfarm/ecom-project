import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
  background,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShopContext";
import { CartItem } from "./CartItem";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
const primaryCol = "#170542";

const Navbar = () => {
  const { cartQuantity, cartItems } = useShoppingCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display, changeDisplay] = useState("none");

  return (
    <>
      <Flex marginTop={5}>
        <Box>
          <NavLink color={primaryCol} to="/" style={{ fontSize: "35px" }}>
            Logo
          </NavLink>
        </Box>
        <Spacer />
        <Flex display={["none", "none", "flex", "flex"]} gap="70px">
          <Box>
            <NavLink
              to="/"
              color={primaryCol}
              style={{
                fontSize: "23px",
              }}
            >
              Home
            </NavLink>
          </Box>

          <Box>
            <NavLink
              to="/contact"
              color={primaryCol}
              style={{ fontSize: "23px", transition: "0.2s" }}
            >
              Contact
            </NavLink>
          </Box>

          <Box>
            <Button border="0px" onClick={onOpen} bg="none" _hover="none">
              <FontAwesomeIcon fontSize="26px" icon={faCartShopping} />
              <span
                style={{
                  height: "22px",
                  width: "22px",
                  borderRadius: "50%",
                  background: "none",
                  position: "absolute",
                  marginLeft: "47px",
                  marginTop: "15px",
                  border: "2px solid black",
                }}
              >
                <p>{cartQuantity}</p>
              </span>{" "}
            </Button>
          </Box>
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
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          bg="none"
          icon={
            <HamburgerIcon color={primaryCol} height="40px" width="100px" />
          }
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />
      </Flex>
      <Flex
        paddingTop={10}
        align="center"
        justifyContent="center"
        zIndex={20}
        height="100vh"
        bg={primaryCol}
        top="0"
        left="0"
        pos="fixed"
        w="100vw"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end" marginLeft="80%" marginTop="-60%">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close menu"
            bg="none"
            color="white"
            _hover={{ bg: "none" }}
            size="lg"
            icon={<CloseIcon height="40px" width="25px" />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex direction="column" align="center" gap={20}>
          <Box>
            <NavLink
              to="/"
              style={{
                color: "white",
                fontSize: "23px",
              }}
            >
              Home
            </NavLink>
          </Box>

          <Box>
            <NavLink
              to="/contact"
              style={{ color: "white", fontSize: "23px", transition: "0.2s" }}
            >
              Contact
            </NavLink>
          </Box>

          <Box>
            <Button border="0px" onClick={onOpen} bg="none" _hover="none">
              <FontAwesomeIcon
                color="white"
                fontSize="26px"
                icon={faCartShopping}
              />
              <span
                style={{
                  height: "22px",
                  width: "22px",
                  borderRadius: "50%",
                  background: "none",
                  position: "absolute",
                  marginLeft: "47px",
                  marginTop: "15px",

                  color: "white",
                }}
              >
                <p>{cartQuantity}</p>
              </span>{" "}
            </Button>
          </Box>
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
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
