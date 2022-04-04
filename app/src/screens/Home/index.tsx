import React from "react";
import { FlatList } from "react-native";

import { MainHeader } from "../../components/MainHeader";
import { renderMainCard } from "../../utils/renderMainCard";
import { FixedButton } from "../../components/FixedButton";

import { Container } from "./styles";

import { items } from "./data";

export function Home() {
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

      <FixedButton />
    </Container>
  );
}
