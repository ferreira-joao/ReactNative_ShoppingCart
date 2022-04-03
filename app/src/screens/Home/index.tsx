import React from "react";
import { FlatList } from "react-native";

import { MainHeader } from "../../components/MainHeader";
import { renderMainCard } from "../../utils/renderMainCard";

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
        ListHeaderComponent={<MainHeader />}
      />
    </Container>
  );
}
