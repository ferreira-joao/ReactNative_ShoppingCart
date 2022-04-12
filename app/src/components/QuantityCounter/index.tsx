import React, { useState } from "react";

import { Container, ActionButton, Counter } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";

interface ICounter {
  quantity: number;
}

export function QuantityCounter({ quantity }: ICounter) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    if (count === 1) {
      Alert.alert("Can't subtract.");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <Container>
      <ActionButton onPress={handleAdd}>
        <Icon name="add-outline" size={30} color="#FFF" />
      </ActionButton>

      <Counter>{quantity}</Counter>

      <ActionButton onPress={handleRemove}>
        <Icon name="remove-outline" size={30} color="#FFF" />
      </ActionButton>
    </Container>
  );
}
