import homeDefault from "./home-default.png";
import homeSelected from "./home-selected.png";
import createDefault from "./create-default.png";
import createSelected from "./create-selected.png";
import Button from "../Buttons/Button";
import styled from "styled-components";

const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: var(--secondary-background-dark-blue);
  box-shadow: inset 0px 0px 11px 1px rgb(34, 113, 209);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width > 1024px) {
    position: relative;
    justify-content: space-between;
    height: 125px;
    min-height: 125px;
    padding: 0 20px;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-color-blue);
  box-shadow: inset 0px 0px 12px 2px rgb(34, 113, 209);

  @media (width > 1024px) {
    bottom: 0;
    top: auto;
  }
`;

export const LogoStyles = styled.img`
  display: none;

  @media (width > 1024px) {
    display: block;
    height: 40px;
    width: auto;
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width > 1024px) {
    width: auto;
    gap: 25px;
  }
`;

const Header = (props) => {
  console.log(props)
  return (
    <HeaderStyles>
      <ShadowStyles />
      <LogoStyles src={props.logo} alt="Logo de aluraFlix" />
      <ButtonContainer>
        <Button path="/" iconActive={homeSelected} iconInactive={homeDefault}>
          Home
        </Button>
        <Button path="/create" iconActive={createSelected} iconInactive={createDefault}>
          Nuevo video
        </Button>
      </ButtonContainer>
    </HeaderStyles>
  );
};

export default Header;
