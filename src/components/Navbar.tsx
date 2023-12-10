import { HStack, Image, Link, Text } from "@chakra-ui/react";
import react from "../assets/react.svg";
import SearchProducts from "./SearchProducts";
interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = () => {
  return (
    <HStack>
      <Image src={react} boxSize="60px" />
      <Link href="/contact">Contact</Link>
    </HStack>
  );
};

export default Navbar;
