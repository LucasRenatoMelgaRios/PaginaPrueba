import styled from "styled-components"
import logo from "../assets/logo.png"
import marca from "../assets/nombrePagina.png"
import { Buscador } from "../components/Buscador"
import { SeriesSection } from "../components/SeriesSection"
import user from "../assets/userImage.png"
import { Paginado } from "../components/Paginado"

export const HomePage = () => {
    return (
      <>
        <MainContainer>
          <Header>
            <Container style={{ justifyContent: "space-around" }}>
              <LogoContainer>
                <img src={marca} alt="Marca" />
              </LogoContainer>
              <NavBar>
                <ul>
                  <a href="">Inicio</a>
                  <a href="">Biblioteca</a>
                  <a href="">Clasificación</a>
                  <a href="">Grupos</a>
                  <a href="">Favoritos Feed</a>
                </ul>
              </NavBar>
            </Container>
            <Container style={{ justifyContent: "flex-end", paddingRight: "100px" }}>
              <Buscador />
              <img src={user} alt="Usuario" />
            </Container>
          </Header>
          <SeriesSection />
        </MainContainer>
      </>
    );
  };

const MainContainer = styled.main`
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    gap: 30px;
    height: 100%;
    img{
        width: 3vw;
    }
`;

const Header = styled.header`
    display: flex;
    height: 8vh;
    margin-top: 50px;
    background-color: rgb(25, 25, 25);
    border: 1px solid rgb(8, 8, 8);
    box-shadow: 0 7px 8px rgb(29, 29, 29);
    align-items: center;
    justify-content: space-between;
    gap: 100px;

`;

const LogoContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: end;

    img{
        width: 60%;

    }

`;

const NavBar = styled.nav`

    ul{
        display: flex;
        gap: 2vw;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    ul > a{
        color: #ffff;
        text-decoration: none;
        font-weight: bold;
        font-size: 0.8vw;
    }
`;