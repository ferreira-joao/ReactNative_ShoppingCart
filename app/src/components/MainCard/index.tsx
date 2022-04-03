import React from "react";

import { Container, ProductImage, ProductName, ProductPrice } from "./styles";

export function MainCard() {
  return (
    <Container>
      <ProductImage />

      <ProductName>Sapato A</ProductName>

      <ProductPrice>$250.00</ProductPrice>
    </Container>
  );
}
