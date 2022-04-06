import React from "react";

import { Container, Total, CheckButton, CheckButtonText } from "./styles";

export function CheckOutArea() {
  return (
    <Container>
      <Total>$ 1000.00</Total>

      <CheckButton>
        <CheckButtonText>Check out</CheckButtonText>
      </CheckButton>
    </Container>
  );
}
