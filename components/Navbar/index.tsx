import React from "react";

import { Menu } from "../Menu";

import { Container, Title } from "./styles";

export function Navbar(): JSX.Element {
  return (
    <Container>
      <Title>Meritum</Title>

      <Menu />
    </Container>
  );
}
