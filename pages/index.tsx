import type { NextPage } from 'next'

import { NextHead } from '../components/NextHead';
import { Navbar } from '../components/Navbar';

import {
  Container,
  HeroContainer,
  HeroTitle,
  CenteredContainer
} from '../styles/pages/home';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>

      <HeroContainer>
        <CenteredContainer>
          <HeroTitle>Seja bem vindo(a) à Compliance <br/> Empresa X20</HeroTitle>
        </CenteredContainer>
      </HeroContainer>
    </Container>
  );
}

export default Home
