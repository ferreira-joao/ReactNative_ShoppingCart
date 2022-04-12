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
  stock: number;
  price: string;
}

export function MainCard({ product, name, stock, price }: IMainCard) {
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

        <ProductQuantity>In stock: {stock}</ProductQuantity>

        <ProductPrice numberOfLines={1}>$ {price}</ProductPrice>
      </DataContainer>

      <AddButton onPress={handleAdd}>
        <AddButtonText>Add</AddButtonText>
      </AddButton>
    </Container>
  );
}
