import React, { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

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
  product: {};
  name: string;
  price: string;
}

export function MainCard({ product, name, price }: IMainCard) {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleAdd() {
    setCart([...cart, product]);
  }

  return (
    <Container>
      <DataContainer>
        <ProductImage />

        <ProductName numberOfLines={1}>{name}</ProductName>

        <ProductPrice numberOfLines={1}>$ {price}</ProductPrice>
      </DataContainer>

      <AddButton onPress={handleAdd}>
        <AddButtonText>Add</AddButtonText>
      </AddButton>
    </Container>
  );
}
