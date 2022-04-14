import Head from "next/head";
import { NextHead } from "../NextHead";

import { HeaderProps } from "./interface";
import { Container } from "./styles";

export function Header({ title, children }: HeaderProps): JSX.Element {
  return (
    <Container>
      <NextHead title={title} />
      {children}
    </Container>
  );
}
