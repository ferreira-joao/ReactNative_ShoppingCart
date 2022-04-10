import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import { MainHeader } from "../../components/MainHeader";
import { renderMainCard } from "../../utils/renderMainCard";
import { FixedButton } from "../../components/FixedButton";
import { ShoppingCartModal } from "../../components/ShoppingCartModal";

import { Container } from "./styles";

import { getStore } from "../../utils/apiCalls";

export function Home() {
  const [isVisible, setVisible] = useState(false);
  const [shop, setShop] = useState();
  const [loading, setLoading] = useState(true);

  const handleShopCall = async () => {
    const store = await getStore();

    setShop(store);

    setLoading(false);
  };

  useEffect(() => {
    handleShopCall();
  }, []);

  function handleModal() {
    setVisible(!isVisible);
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size={"large"}
          color="#000"
        />
      ) : (
        <FlatList
          data={shop}
          numColumns={2}
          renderItem={renderMainCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 8 }}
          ListHeaderComponent={<MainHeader />}
        />
      )}

      <ShoppingCartModal visible={isVisible} onClose={handleModal} />

      <FixedButton onPress={handleModal} />
    </Container>
  );
}
