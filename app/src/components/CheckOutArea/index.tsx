import React from "react";

import { Container, Total, CheckButton, CheckButtonText } from "./styles";

interface ITotal {
  total: number;
}

export function CheckOutArea({ total }: ITotal) {
  return (
    <Container>
      <Total>$ {total}</Total>

      <CheckButton>
        <CheckButtonText>Check out</CheckButtonText>
      </CheckButton>
    </Container>
  );
}
