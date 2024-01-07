import { Button, Flex, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
const primaryCol = "#170542";

export const Checkout = () => {
  const navigate = useNavigate();
  const onClick = () => {
    try {
      window.localStorage.clear();
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Flex justifyContent="center" direction="column" height="100vh">
        <Flex justifyContent="center">
          <Text fontSize="30px" color={primaryCol}>
            Checkout successful!{" "}
          </Text>
        </Flex>
        <Flex justifyContent="center" marginTop={5}>
          <Button onClick={onClick} color="white" bg={primaryCol}>
            Go back to the homepage
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
