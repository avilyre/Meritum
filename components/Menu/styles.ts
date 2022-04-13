import styled, { css } from "styled-components";

import breakpoints from "../../constants/breakpoints";
import { MenuContainerProps, OverlayProps } from "./interface";

export const Container = styled.div``;

export const MenuContainer = styled.div<MenuContainerProps>`
  & {
    li + li {
      margin-left: 1rem;
    }
  }

  white-space: nowrap;

  @media (max-width: ${breakpoints.mediumScreen}px) {
    position: fixed;
    top: 0;


    ${({ isVisible }) => isVisible ?
    css`
      right: 0%;
    `:
    css`
      right: -100%;
    `}

    height: 100%;
    padding: 0.5rem 0 0 0.5rem;

    transition: 1s;

    background: ${({ theme }) => theme.colors.shape};

    & {
      li + li {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
  }
`;

export const ItemContainer = styled.li`
  display: inline-block;
  
  font-family: ${({ theme }) => theme.fonts.primary};
  
  @media (max-width: ${breakpoints.mediumScreen}px) {
    display: block;
  }
`;

export const Item = styled.a`
  display: inline-block;

  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
  text-decoration: none;

  border-radius: 4px;
  padding: 1rem;

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.shape};

    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${breakpoints.mediumScreen}px) {
    display: block;
    border-radius: 30px 0 0 30px;
  }
`;

export const Overlay = styled.button<OverlayProps>`
  position: fixed;
  top: 0;

  ${({ isVisible }) => isVisible ?
  css`
    left: 0%;
    opacity: 1;
  `:
  css`
    left: 100%;
    opacity: 0;
  `}

  height: 100%;
  width: 100%;

  border: none;

  transition: 0.5s;

  background: rgba(0, 0, 0, 0.2);

  @media (min-width: ${breakpoints.mediumScreen}px) {
    display: none;
  }
`;
