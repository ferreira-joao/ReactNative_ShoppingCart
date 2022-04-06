import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import { MainHeader } from "../../components/MainHeader";
import { renderMainCard } from "../../utils/renderMainCard";
import { FixedButton } from "../../components/FixedButton";
import { ShoppingCartModal } from "../../components/ShoppingCartModal";

import { Container } from "./styles";

import { items } from "./data";
import { getStore } from "../../utils/apiCalls";

export function Home() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    getStore();
  }, []);

  function handleModal() {
    setVisible(!isVisible);
  }

  return (
    <Container>
      <FlatList
        data={items}
        numColumns={2}
        renderItem={renderMainCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 8 }}
        ListHeaderComponent={<MainHeader />}
      />

      <ShoppingCartModal visible={isVisible} onClose={handleModal} />

      <FixedButton onPress={handleModal} />
    </Container>
  );
}
