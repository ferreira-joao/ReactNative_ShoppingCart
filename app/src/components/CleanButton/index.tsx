import React, { useContext } from "react";

import { Container, ButtonText } from "./styles";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export function CleanButton() {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleClean() {
    setCart([]);
  }

  return (
    <Container onPress={handleClean}>
      <ButtonText>CLEAN</ButtonText>
    </Container>
  );
}
