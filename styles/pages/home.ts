import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};

  padding: 1rem;

  background: ${({ theme }) => theme.colors.primary};
`;
