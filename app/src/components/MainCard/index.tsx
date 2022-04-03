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

interface IMainCard {
  name: string;
  price: string;
}

export function MainCard({ name, price }: IMainCard) {
  return (
    <Container>
      <DataContainer>
        <ProductImage />

        <ProductName numberOfLines={1}>{name}</ProductName>

        <ProductPrice numberOfLines={1}>$ {price}</ProductPrice>
      </DataContainer>

      <AddButton>
        <AddButtonText>Add</AddButtonText>
      </AddButton>
    </Container>
  );
}
