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
  id: number;
  product: {};
  name: string;
  stock: number;
  price: string;
}

export function MainCard({ id, product, name, stock, price }: IMainCard) {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleAdd() {
    if (cart.some((prod: any) => prod.name === name)) {
      setCart(
        cart.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      const item_quantity = Object.assign(product, { quantity: 1 });

      setCart([...cart, item_quantity]);
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
