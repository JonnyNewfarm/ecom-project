import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const primaryCol = "#170542";
const Footer = () => {
  return (
    <Flex
      marginTop="150px"
      marginBottom="20px"
      display={["column", "column", "flex", "flex"]}
      bg="#2c1e73"
      color={"white"}
      borderRadius={40}
      shadow={10}
      justifyContent="space-between"
    >
      <Box padding={10}>
        <UnorderedList fontSize="20px">
          <Text fontWeight="bolder">Address:</Text>
          <Text>Osloveien 33</Text>
          <Text> 0315, Oslo</Text>
        </UnorderedList>
      </Box>

      <Box padding={10}>
        <UnorderedList fontSize="20px">
          <Text fontWeight="bolder">Contact</Text>
          <Text></Text>
          <Text>
            <PhoneIcon /> 12 13 14 15
          </Text>
          <Text>
            <EmailIcon /> ecom@support.com
          </Text>
          <Link to="/contact">
            <Text as="u">Contact form</Text>
          </Link>
        </UnorderedList>
      </Box>

      <Box padding={10}>
        <UnorderedList fontSize="20px">
          <Text fontWeight="bolder">Socials</Text>
          <Text></Text>
          <Text>Facebook</Text>
          <Text>Instagram</Text>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Footer;
