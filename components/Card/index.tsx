import { CardProps } from "./interface";

import { Container, IconContainer, Title } from "./styles";

export function Card({ title, icon, ...props }: CardProps): JSX.Element {
  return (
    <Container {...props}>
      <IconContainer>
        {icon}
      </IconContainer>
      <Title>{title}</Title>
    </Container>
  );
}
