import React from "react";

import {
  MenuContainer,
  ItemContainer,
  Item,
  Container,
  ToggleMenuIcon,
  ToggleMenuButtonContainer
} from "./styles";

export function Menu(): JSX.Element {
  return (
    <Container>
      <ToggleMenuButtonContainer>
        <ToggleMenuIcon />
      </ToggleMenuButtonContainer>

      <MenuContainer>
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
      </MenuContainer>
    </Container>
  );
}
