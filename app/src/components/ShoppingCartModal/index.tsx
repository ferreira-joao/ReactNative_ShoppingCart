import React, { useState, useContext, useEffect } from "react";
import { Modal, FlatList } from "react-native";

import { ShoppingCartHeader } from "../ShoppingCartHeader";
import { renderShoppingCard } from "../../utils/renderShoppingCard";
import { CleanButton } from "../CleanButton";
import { CheckOutArea } from "../CheckOutArea";

import { Container } from "./styles";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

interface IShoppingCartModal {
  visible: boolean;
  onClose: () => void;
}

export function ShoppingCartModal({ visible, onClose }: IShoppingCartModal) {
  const [total, setTotal] = useState(0);
  const [cart] = useContext(ShoppingCartContext);

  useEffect(() => {
    const sumTotal = cart.reduce(
      (acc: any, obj: { price: any }) => acc + obj.price,
      0
    );

    setTotal(sumTotal);
  }, [cart]);

  return (
    <Modal animationType="slide" visible={visible}>
      <Container>
        <FlatList
          data={cart}
          renderItem={renderShoppingCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20 }}
          ListHeaderComponent={<ShoppingCartHeader onClose={onClose} />}
          ListFooterComponent={<CleanButton />}
        />

        <CheckOutArea total={total} />
      </Container>
    </Modal>
  );
}
