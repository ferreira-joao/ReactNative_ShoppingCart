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
  stock: number;
  quantity: number;
}

export function ShoppingCard({
  id,
  name,
  price,
  stock,
  quantity,
}: IShoppingCard) {
  return (
    <Container>
      <ContainerData>
        <ProductImage />

        <ContainerTexts>
          <ProductName>{name}</ProductName>

          <ProductPrice>$ {price}</ProductPrice>
        </ContainerTexts>
      </ContainerData>

      <QuantityCounter id={id} stock={stock} quantity={quantity} />
    </Container>
  );
}
