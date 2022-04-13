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
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export function ShoppingCard({ id, name, price, quantity }: IShoppingCard) {
  return (
    <Container>
      <ContainerData>
        <ProductImage />

        <ContainerTexts>
          <ProductName>{name}</ProductName>

          <ProductPrice>$ {price}</ProductPrice>
        </ContainerTexts>
      </ContainerData>

      <QuantityCounter id={id} quantity={quantity} />
    </Container>
  );
}
