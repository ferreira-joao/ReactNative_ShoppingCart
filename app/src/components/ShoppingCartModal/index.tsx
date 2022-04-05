import React from "react";
import { Modal } from "react-native";

import { Container, Title } from "./styles";

interface IShoppingCartModal {
  visible: boolean;
}

export function ShoppingCartModal({ visible }: IShoppingCartModal) {
  return (
    <Modal animationType="slide" visible={visible}>
      <Container>
        <Title>Modall</Title>
      </Container>
    </Modal>
  );
}
