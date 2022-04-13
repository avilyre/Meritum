import React, { useState } from "react";

import { ToggleMenuButton } from "./components/ToggleButton";

import {
  MenuContainer,
  ItemContainer,
  Item,
  Container,
  Overlay,
} from "./styles";

export function Menu(): JSX.Element {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <Container>
      <ToggleMenuButton
        onClick={handleToggleMenu}
      />
      <Overlay
        onClick={handleToggleMenu}
        isVisible={isMenuOpened}
      />

      <MenuContainer isVisible={isMenuOpened}>
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
