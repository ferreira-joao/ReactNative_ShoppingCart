import React from "react";
import { Modal, FlatList } from "react-native";

import { ShoppingCartHeader } from "../ShoppingCartHeader";
import { renderShoppingCard } from "../../utils/renderShoppingCard";
import { CleanButton } from "../CleanButton";

import { Container } from "./styles";

import { items } from "./data";

interface IShoppingCartModal {
  visible: boolean;
  onClose: () => void;
}

export function ShoppingCartModal({ visible, onClose }: IShoppingCartModal) {
  return (
    <Modal animationType="slide" visible={visible}>
      <Container>
        <FlatList
          data={items}
          renderItem={renderShoppingCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 8 }}
          ListHeaderComponent={<ShoppingCartHeader onClose={onClose} />}
          ListFooterComponent={<CleanButton />}
        />
      </Container>
    </Modal>
  );
}
