import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

import { Container } from "./styles";

interface IFixedButton {
  onPress: () => void;
}

export function FixedButton({ onPress }: IFixedButton) {
  return (
    <Container onPress={onPress}>
      <Icon name="cart-outline" color={"#FFF"} size={30} />
    </Container>
  );
}
