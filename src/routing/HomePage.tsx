import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";
export interface ProductQuery {
  searchText: string;
}

function HomePage() {
  const [ProductQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="main" paddingTop="100px">
        <ProductGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
