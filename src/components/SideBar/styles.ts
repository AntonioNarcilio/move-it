import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 100%;
  max-width: 5rem;
  height: 100%;

  position: fixed;
  z-index: 99;

  background: ${(props) => props.theme.colors.foreground};

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li:nth-child(1) {
    width: 5rem;
    height: 41vh;

    display: flex;
    align-items: end;

    /* position: relative; */
    padding-top: 2rem;
  }

  /* Logo */
  ul li:nth-child(1) span svg {
    width: 2.25rem;
    height: 2.25rem;
  }

  /* Ícone Home */
  ul li:nth-child(2){
    display: flex;
    align-items: center;

    height: 70px;
  }
  ul li:nth-child(2) span svg path {
    width: 2.25rem;
    height: 2.25rem;
  }

  /* Ícone Classificação */
  ul li:nth-child(3){
    display: flex;
    align-items: center;
    height: 70px;
  }
  ul li:nth-child(3) span svg path {
    width: 2.25rem;
    height: 2.25rem;
  }

  ul li label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }


  @media(max-width: 720px) {
    width: 100%;
    max-width: 100vw;
    min-height: 10vh;
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.colors.foreground};

    ul {
      width: 100%;
      height: 10vh;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    ul li:nth-child(1) {
      width: 41rem;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: end;

      padding: 1rem;
      margin: 0;
    }

    ul li:nth-child(1) span img {
      width: 2.25rem;
      height: 2.25rem;
      object-fit: cover;
      object-position: 0 0;
    }

    ul li:nth-child(2){
      display: flex;
      align-items: center;
      padding: 0.5rem;
    }

    ul li:nth-child(3){
      display: flex;
      align-items: center;

      padding: 0.5rem;
    }

    ul li label {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  @media(max-width: 302px ) {
    width: 100%;
    max-width: 125vw;
  }

  @media(max-width: 667px) and (max-height: 375px) {
    height: 15vh;
  }

`;

export const Indicador = styled.div`
    width: 0.3rem;
    height: 70px;
    position: absolute;
    left: 0;
    opacity: 0;
    border-radius: 0 5px 5px 0;

    background: ${(props) => props.theme.colors.green};

  @media(max-width: 720px) {
    width: 60px;
    height: 0.3rem;
    top: 0;
    left: auto;

    border-radius: 0px 0px 5px 5px;
  }

  @media(width: 653px) and (height: 280px) {
    display: none;
  }
`;

const SelectPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 70px;

  border: 0;
  outline: 0;

  background: none;
`;

export const SelectPageButtonActive = styled(SelectPageButton)`
  ${Indicador} {
    opacity: 1;
  }

  svg path {
    stroke: ${(props) => props.theme.colors.green};
  }
`;

export const SelectPageButtonNoActive = styled(SelectPageButton)`
  ${Indicador} {
    opacity: 1;
  }
  svg path {
    stroke: ${(props) => props.theme.colors.purple};

    transition: all 0.4s ease;
  }

  &:hover {
    svg path {
      stroke: ${(props) => props.theme.colors.purpleDark};
    }
  }
`;
