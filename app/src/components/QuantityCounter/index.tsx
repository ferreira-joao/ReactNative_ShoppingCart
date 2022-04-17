import React, { useContext } from "react";

import { Container, ActionButton, Counter } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

interface ICounter {
  id: number;
  stock: number;
  quantity: number;
}

export function QuantityCounter({ id, stock, quantity }: ICounter) {
  const [cart, setCart] = useContext(ShoppingCartContext);

  function handleAdd() {
    if (quantity === stock) {
      Alert.alert("Out of stock.");
    } else {
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
  }

  function handleRemove() {
    if (quantity === 1) {
      setCart(cart.filter((item: any) => item.id !== id));
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
