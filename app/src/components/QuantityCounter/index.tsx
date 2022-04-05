import React, { useState } from "react";

import { Container, ActionButton, Counter } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";

interface IQuantityCounter {
  quantity: number;
}

export function QuantityCounter({ quantity }: IQuantityCounter) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(quantity++);
  }

  function handleRemove() {
    if (quantity === 0) {
      Alert.alert("Can't subtract.");
    } else {
      setCount(quantity--);
    }
  }

  return (
    <Container>
      <ActionButton onPress={handleAdd}>
        <Icon name="add-outline" size={30} color="#FFF" />
      </ActionButton>

      <Counter>{count}</Counter>

      <ActionButton onPress={handleRemove}>
        <Icon name="remove-outline" size={30} color="#FFF" />
      </ActionButton>
    </Container>
  );
}
