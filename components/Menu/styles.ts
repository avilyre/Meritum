import styled from "styled-components";

import breakpoints from "../../constants/breakpoints";

export const Container = styled.div``;

export const MenuContainer = styled.div`
  & {
    li + li {
      margin-left: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mediumScreen}px) {
    display: none;

    position: fixed;
    top: 0;
    right: 0;

    height: 100%;
    padding: 0.5rem 0 0 0.5rem;

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

export const Overlay = styled.div`
  display: none;

  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.2);

  @media (min-width: ${breakpoints.mediumScreen}px) {
    display: none;
  }
`;
