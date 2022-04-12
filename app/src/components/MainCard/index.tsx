import React, { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

import {
  Container,
  DataContainer,
  ProductImage,
  ProductName,
  ProductQuantity,
  ProductPrice,
  AddButton,
  AddButtonText,
} from "./styles";

interface IMainCard {
  product: {};
  name: string;
  quantity: number;
  price: string;
}

export function MainCard({ product, name, quantity, price }: IMainCard) {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleAdd() {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  }

  return (
    <Container>
      <DataContainer>
        <ProductImage />

        <ProductName numberOfLines={1}>{name}</ProductName>

        <ProductQuantity>In stock: {quantity}</ProductQuantity>

        <ProductPrice numberOfLines={1}>$ {price}</ProductPrice>
      </DataContainer>

      <AddButton onPress={handleAdd}>
        <AddButtonText>Add</AddButtonText>
      </AddButton>
    </Container>
  );
}
