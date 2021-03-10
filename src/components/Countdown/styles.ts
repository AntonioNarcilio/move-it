import styled from 'styled-components';
import Button from '../Button/styles';

export const CountdownContainer = styled.div`
  display: flex;
  align-content: center;
  font-family: "Rajdhani";
  font-weight: 600;
  color: ${(props) => props.theme.colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${(props) => props.theme.colors.foreground};
    /* box-shadow: 0 0 60px rgba(0, 0, 0, 0.05); */
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    color: ${(props) => props.theme.colors.white};
  }

  > div span {
    flex: 1;
  }

  > div span:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.background};
  }

  > div span:last-child {
    border-right: 1px solid ${(props) => props.theme.colors.background};
  }

  > span {
    font-size: 7.5rem;
    margin: 0 0.5rem;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const CountdownButton = styled(Button)`
  height: 5rem;

  margin-top: 2rem;
  font-size: 1.25rem;

  background: ${(props) => props.theme.colors.purple};
  box-shadow: 0px 4px ${(props) => props.theme.colors.purpleShadow};


  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.purpleDark};
    box-shadow: 0px 2px ${(props) => props.theme.colors.purpleShadow};
  }
`;

export const CountdownButtonActive = styled(Button)`
  height: 5rem;

  margin-top: 2rem;
  font-size: 1.25rem;

  /* background: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.red};
  box-shadow: 0px 4px ${(props) => props.theme.colors.grayLine}; */


  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 4px ${(props) => props.theme.colors.redShadow};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors.redDark};
    color: ${(props) => props.theme.colors.background};
    box-shadow: 0px 2px ${(props) => props.theme.colors.redShadow};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.foreground};
    color: ${(props) => props.theme.colors.red};
    box-shadow: 0px 4px ${(props) => props.theme.colors.grayLine};
    cursor: not-allowed;
    transform: translateY(0px);
  }

  /* &:not(:disabled):active {
    box-shadow: 0 0;
    transform: translateY(4px);
  } */

`;
