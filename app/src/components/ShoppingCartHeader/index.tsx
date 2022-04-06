import React from "react";

import { Header, Title, CloseButton } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

interface IShoppingCartHeader {
  onClose: () => void;
}

export function ShoppingCartHeader({ onClose }: IShoppingCartHeader) {
  return (
    <Header>
      <Title>Shopping Cart</Title>

      <CloseButton onPress={onClose}>
        <Icon name="close-outline" size={50} color="#000" />
      </CloseButton>
    </Header>
  );
}
