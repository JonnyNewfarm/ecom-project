import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
interface Props {
  onSearch: (searchText: string) => void;
}

const SearchProducts = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <Input
          borderRadius={20}
          width={300}
          placeholder="Search.."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchProducts;
