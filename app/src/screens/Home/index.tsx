import React from "react";

import { MainHeader } from "../../components/MainHeader";
import { MainCard } from "../../components/MainCard";

import { Container, List } from "./styles";

export function Home() {
  return (
    <Container>
      <MainHeader />

      <List>
        <MainCard name="Sapato A" price="$250.00" />
      </List>
    </Container>
  );
}
