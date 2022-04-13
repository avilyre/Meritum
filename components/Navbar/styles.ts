import styled from "styled-components";

export const Container = styled.nav`
  display: flex;

  height: 60px;

  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  box-shadow: 0 10px 20px ${({ theme }) => theme.colors.background};

  background: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;
