import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

import breakpoints from "../../../../constants/breakpoints";

export const Container = styled.button`
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

export const Icon = styled(FiMenu)`
  font-size: 1rem;
`;
