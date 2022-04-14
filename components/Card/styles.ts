import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 300px;
  padding: 2rem;
  border-radius: 4px;
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};

  text-decoration: none;

  background: ${({ theme }) => theme.colors.shape};
`;

export const IconContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 15px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.title};

  text-align: center;
`;
