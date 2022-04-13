import React from "react";
import { ToggleMenuButtonProps } from "./interface";

import { Container, Icon } from "./styles";

export function ToggleMenuButton({ ...props }: ToggleMenuButtonProps): JSX.Element {
  return (
    <Container {...props}>
      <Icon />
    </Container>
  );
}
