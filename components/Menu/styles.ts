import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

import breakpoints from "../../constants/breakpoints";

export const Container = styled.ul``;

export const ToggleMenuButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.8rem;
  border-radius: 50%;
  border: none;

  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.shape};
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${breakpoints.mediumScreen}px) {
    display: none;
  }
`;

export const ToggleMenuIcon = styled(FiMenu)`
  font-size: 1rem;
`;

export const MenuContainer = styled.div`
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
