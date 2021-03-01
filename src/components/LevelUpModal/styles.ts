import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(37, 37, 37, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled.div`
  width: auto;
  height: 100%;
  pointer-events: none;
  position: absolute;
  z-index: 99;
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.foreground};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  /* box-shadow: 0 0 68px rgba(0, 0, 0, 0.05); */
  text-align: center;
  position: relative;


  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.purple};
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    /* caso o botão tenha apenas um ícone ajudando centralizar esse ícone */
    font-size: 0px;
  }

  button:focus {
    outline-width: 1;
    outline-style: dashed;
    outline-color: ${(props) => props.theme.colors.red};
  }

`;
