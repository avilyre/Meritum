import styled, { css } from "styled-components";
import { CounterIndicatorProps } from "./interface";

export const Container = styled.span<Pick<CounterIndicatorProps, "enableMarginLeft">>`
  display: inline-block;

  border-radius: 4px;
  padding: 4px;

  ${({ enableMarginLeft }) => enableMarginLeft && css`
    margin-left: 15px;
  `}

  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.shape};

  background: ${({ theme }) => theme.colors.danger};
`;
