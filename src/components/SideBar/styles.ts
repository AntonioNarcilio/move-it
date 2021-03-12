import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 100%;
  max-width: 5rem;
  height: 100%;

  position: fixed;
  z-index: 99;

  background: ${(props) => props.theme.colors.foreground};
  /* background: linear-gradient(0deg,
      ${(props) => props.theme.colors.grayLine} -50%,
      ${(props) => props.theme.colors.foreground} 100%
      ); */


  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li:nth-child(1) {
    width: 5rem;
    /* height: 41vh; */

    height: 100%;

    display: flex;
    align-items: end;

    margin-top: 20%;
  }

  /* Logo */
  ul li:nth-child(1) span svg {
    width: 2.25rem;
    height: 2.25rem;
  }
  ul li:nth-child(1) span svg path{
    fill: ${(props) => props.theme.colors.logo};
  }

  /* Ícone Home */
  ul li:nth-child(2){
    display: flex;
    align-items: center;
    height: 70px;
  }
  ul li:nth-child(2) span svg {
    width: 2.25rem;
    height: 2.25rem;
  }

  /* Ícone Classificação */
  ul li:nth-child(3){
    display: flex;
    align-items: center;
    height: 70px;
  }
  ul li:nth-child(3) span svg {
    width: 2.25rem;
    height: 2.25rem;
  }

  /* Ícone Switch */
  ul li:nth-child(4){
    display: flex;
    align-items: flex-end;
    height: 100%;
    margin-bottom: 20%;
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
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }


    ul li:nth-child(1) {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: end;

      padding: 1rem;
      margin: 0;
    }

    ul li:nth-child(1) span svg {
      width: 2.25rem;
      height: 2.25rem;
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

    /* Ícone Switch */
    ul li:nth-child(4){
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      margin-bottom: 0;
      padding-right: 1rem;
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

    background: ${(props) => props.theme.colors.sideBarActive};

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
    stroke: ${(props) => props.theme.colors.sideBarActive};
  }
`;

export const SelectPageButtonNoActive = styled(SelectPageButton)`
  ${Indicador} {
    opacity: 1;
  }
  svg path {
    stroke: ${(props) => props.theme.colors.sideBarDisable};

    transition: all 0.4s ease;
  }

  &:hover {
    svg path {
      stroke: ${(props) => props.theme.colors.sideBarDisable};
    }
  }
`;
