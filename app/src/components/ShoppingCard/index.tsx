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

export function ShoppingCard() {
  return (
    <Container>
      <ContainerData>
        <ProductImage />

        <ContainerTexts>
          <ProductName>Sapato A</ProductName>

          <ProductPrice>$ 250.00</ProductPrice>
        </ContainerTexts>
      </ContainerData>

      <QuantityCounter quantity={1} />
    </Container>
  );
}
