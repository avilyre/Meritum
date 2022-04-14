import React, { useState } from "react";
import { CounterIndicator } from "./components/CounterIndicator";

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
          <Item href="/">
            Treinamentos
            <CounterIndicator amount={2} enableMarginLeft />
          </Item>
        </ItemContainer>

        <ItemContainer>
          <Item href="/">
            Declarações
            <CounterIndicator amount={6} enableMarginLeft />
          </Item>
        </ItemContainer>

        <ItemContainer>
          <Item href="/">Doação e Patrocínio</Item>
        </ItemContainer>
        
        <ItemContainer>
          <Item href="/">Interação com Concorrentes</Item>
        </ItemContainer>

        <ItemContainer>
          <Item href="/">
            Outros
            <CounterIndicator amount={4} enableMarginLeft />
          </Item>
        </ItemContainer>
      </MenuContainer>
    </Container>
  );
}
