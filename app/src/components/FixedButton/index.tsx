import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

import { Container } from "./styles";

export function FixedButton() {
  return (
    <Container>
      <Icon name="cart-outline" color={"#FFF"} size={30} />
    </Container>
  );
}
