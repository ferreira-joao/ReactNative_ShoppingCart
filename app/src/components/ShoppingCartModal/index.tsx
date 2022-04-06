import React from "react";
import { Modal } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { ShoppingCard } from "../ShoppingCard";

import { Container, Header, Title, CloseButton } from "./styles";

interface IShoppingCartModal {
  visible: boolean;
  onClose: () => void;
}

export function ShoppingCartModal({ visible, onClose }: IShoppingCartModal) {
  return (
    <Modal animationType="slide" visible={visible}>
      <Container>
        <Header>
          <Title>Shopping Cart</Title>

          <CloseButton onPress={onClose}>
            <Icon name="close-outline" size={50} color="#000" />
          </CloseButton>
        </Header>

        <ShoppingCard name="Sapato A" price="250.00" />
        <ShoppingCard name="Sapato B" price="300.00" />
        <ShoppingCard name="Sapato C" price="280.00" />
      </Container>
    </Modal>
  );
}
