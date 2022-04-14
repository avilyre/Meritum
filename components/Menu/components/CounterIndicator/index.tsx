import { CounterIndicatorProps } from "./interface";
import { Container } from "./styles";

export function CounterIndicator({ amount, enableMarginLeft }: CounterIndicatorProps): JSX.Element {
  return (
    <Container enableMarginLeft={enableMarginLeft}>
      {amount}
    </Container>
  );
}