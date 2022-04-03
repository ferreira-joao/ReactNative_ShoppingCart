import React from "react";

import { MainCard } from "../../components/MainCard";

import { Container, TitleHeader, Title, List } from "./styles";

export function Home() {
  return (
    <Container>
      <TitleHeader>STORE</TitleHeader>

      <Title>Our products:</Title>

      <List>
        <MainCard name="Sapato A" price="$250.00" />
      </List>
    </Container>
  );
}
