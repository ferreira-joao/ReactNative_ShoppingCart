import React, { useContext } from "react";

import { Container, ActionButton, Counter } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

interface ICounter {
  id: number;
  quantity: number;
}

export function QuantityCounter({ id, quantity }: ICounter) {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleAdd() {
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
  }

  function handleRemove() {
    if (quantity === 1) {
      Alert.alert("Can't subtract.");
    } else {
      setCart(
        cart.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
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
