import React from "react";

import {
  Container,
  DataContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
  AddButtonText,
} from "./styles";

export function MainCard() {
  return (
    <Container>
      <DataContainer>
        <ProductImage />

        <ProductName numberOfLines={1}>Sapato A</ProductName>

        <ProductPrice numberOfLines={1}>$250.00</ProductPrice>
      </DataContainer>

      <AddButton>
        <AddButtonText>Add</AddButtonText>
      </AddButton>
    </Container>
  );
}
