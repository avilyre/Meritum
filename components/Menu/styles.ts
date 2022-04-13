import styled from "styled-components";

import breakpoints from "../../constants/breakpoints";

export const Container = styled.ul`
  @media (max-width: ${breakpoints.mediumScreen}px) {
    display: none;
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

  padding: 1rem;

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.shape};

    border-radius: 30px;

    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${breakpoints.mediumScreen}px) {
    display: block;
  }
`;
