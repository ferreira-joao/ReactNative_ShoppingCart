import React from "react";

import { QuantityCounter } from "../QuantityCounter";

import {
  Container,
  ContainerData,
  ContainerTexts,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./styles";

interface IShoppingCard {
  name: string;
  price: string;
}

export function ShoppingCard({ name, price }: IShoppingCard) {
  return (
    <Container>
      <ContainerData>
        <ProductImage />

        <ContainerTexts>
          <ProductName>{name}</ProductName>

          <ProductPrice>$ {price}</ProductPrice>
        </ContainerTexts>
      </ContainerData>

      <QuantityCounter />
    </Container>
  );
}
