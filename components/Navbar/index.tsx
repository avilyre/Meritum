import React from "react";

import { HiOfficeBuilding } from "react-icons/hi";

import { Menu } from "../Menu";
import { Container, Title } from "./styles";

export function Navbar(): JSX.Element {
  return (
    <Container>
      <Title>
        <HiOfficeBuilding />
        Meritum
      </Title>
      
      <Menu />
    </Container>
  );
}
