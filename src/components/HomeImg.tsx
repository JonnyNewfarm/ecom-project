import { Box, Flex, Image, Text } from "@chakra-ui/react";

import stockPhoto from "../assets/stockPhoto.jpg";

const HomeImg = () => {
  return (
    <Flex justifyContent="center" marginTop="150px" marginBottom={100}>
      <Box w="75%" height="70%">
        <Text marginBottom="-50px">asdiu</Text>
        <Image
          borderRadius="50px"
          objectFit="cover"
          src={stockPhoto}
          alt="Dan Abramov"
          position="relative"
        ></Image>
      </Box>
    </Flex>
  );
};

export default HomeImg;
