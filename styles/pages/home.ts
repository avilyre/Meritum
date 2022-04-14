import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroContainer = styled.div`
  padding: 4rem;

  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/assets/images/hero.jpg");

  @media (max-width: ${breakpoints.mediumScreen}px) {
    padding: 1rem;
  }
`;

export const HeroTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.colors.shape};

  @media (max-width: ${breakpoints.mediumScreen}px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
`;

export const CenteredContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SectionHeaderContainer = styled.header`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: ${breakpoints.mediumScreen}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.smallScreen}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
