import React, { useContext } from "react";
import { Alert } from "react-native";

import { Container, Total, CheckButton, CheckButtonText } from "./styles";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

interface ITotal {
  total: number;
}

export function CheckOutArea({ total }: ITotal) {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleCheckout() {
    Alert.alert("Thanks for the purchase!");
    setCart([]);
  }

  return (
    <Container>
      <Total>$ {total}</Total>

      <CheckButton onPress={handleCheckout}>
        <CheckButtonText>Check out</CheckButtonText>
      </CheckButton>
    </Container>
  );
}
