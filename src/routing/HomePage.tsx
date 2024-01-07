import { Grid, GridItem } from "@chakra-ui/react";

import ProductGrid from "../components/ProductGrid";
import { useState } from "react";
import HomeImg from "../components/HomeImg";
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
      <HomeImg />
      <GridItem area="main">
        <ProductGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
