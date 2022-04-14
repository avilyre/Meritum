import type { NextPage } from 'next'
import { FiPlayCircle } from "react-icons/fi";
import { BiDonateHeart } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import {
  AiOutlineForm,
  AiOutlineSearch,
  AiOutlineBook,
  AiOutlineContacts
} from "react-icons/ai";

import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

import {
  Container,
  HeroContainer,
  HeroTitle,
  CenteredContainer,
  Section,
  SectionHeaderContainer,
  SectionTitle,
  CardsList
} from '../styles/pages/home';

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <Navbar />

        <HeroContainer>
          <CenteredContainer>
            <HeroTitle>Seja bem vindo(a) à Compliance <br/> Empresa X20</HeroTitle>
          </CenteredContainer>
        </HeroContainer>
      </Header>

      <Section>
        <SectionHeaderContainer>
          <SectionTitle>Módulos</SectionTitle>
        </SectionHeaderContainer>

        <CardsList>
          <Card
            title="Treinamentos"
            icon={<FiPlayCircle />}
            onClick={() => {}}
          />
          <Card
            title="Formulários"
            icon={<AiOutlineForm />}
            onClick={() => {}}
          />
          <Card
            title="Doação e patrocínio"
            icon={<BiDonateHeart />}
            onClick={() => {}}
          />
          <Card
            title="Interação com concorrentes"
            icon={<MdConnectWithoutContact />}
            onClick={() => {}}
          />
          <Card
            title="Interação com poder público"
            icon={<IoMdContact />}
            onClick={() => {}}
          />
          <Card
            title="Instrumentos normativos"
            icon={<FaWpforms />}
            onClick={() => {}}
          />
          <Card
            title="Pesquisas"
            icon={<AiOutlineSearch />}
            onClick={() => {}}
          />
          <Card
            title="Glossário"
            icon={<AiOutlineBook />}
            onClick={() => {}}
          />
          <Card
            title="Contato"
            icon={<AiOutlineContacts />}
            onClick={() => {}}
          />
        </CardsList>
      </Section>
    </Container>
  );
}

export default Home
