import React from "react";

import {
  Container,
  ItemContainer,
  Item
} from "./styles";

export function Menu(): JSX.Element {
  return (
    <Container>
      <ItemContainer>
        <Item href="/">Treinamentos</Item>
      </ItemContainer>
      <ItemContainer>
        <Item href="/">Declarações</Item>
      </ItemContainer>
      <ItemContainer>
        <Item href="/">Doação e Patrocínio</Item>
      </ItemContainer>
      <ItemContainer>
        <Item href="/">Interação com Concorrentes</Item>
      </ItemContainer>
      <ItemContainer>
        <Item href="/">Outros</Item>
      </ItemContainer>
    </Container>
  );
}
