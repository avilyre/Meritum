import type { NextPage } from 'next'

import { CustomHead } from '../components/CustomHead';
import { Navbar } from '../components/Navbar';

import {
  Container,
  HeroContainer,
  HeroTitle,
  CenteredContainer
} from '../styles/pages/home';

const Home: NextPage = () => {
  return (
    <Container>
      <CustomHead title="Início" />
      <Navbar />

      <HeroContainer>
        <CenteredContainer>
          <HeroTitle>Seja bem vindo(a) à Compliance <br/> Empresa X20</HeroTitle>
        </CenteredContainer>
      </HeroContainer>
    </Container>
  );
}

export default Home
