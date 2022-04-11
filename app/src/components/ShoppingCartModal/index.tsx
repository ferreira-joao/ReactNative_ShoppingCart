import React, { useContext } from "react";
import { Modal, FlatList } from "react-native";

import { ShoppingCartHeader } from "../ShoppingCartHeader";
import { renderShoppingCard } from "../../utils/renderShoppingCard";
import { CleanButton } from "../CleanButton";
import { CheckOutArea } from "../CheckOutArea";

import { Container } from "./styles";

import { items } from "./data";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

interface IShoppingCartModal {
  visible: boolean;
  onClose: () => void;
}

export function ShoppingCartModal({ visible, onClose }: IShoppingCartModal) {
  const [cart] = useContext(ShoppingCartContext);

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

        <CheckOutArea />
      </Container>
    </Modal>
  );
}
