import styled from 'styled-components';
import Button from '../Button/styles';

export const ChallengeBoxContainer = styled.div`
  height: 101%;

  background: ${(props) => props.theme.colors.foreground};
  border-radius: 5px;
  /* box-shadow: 0 0 60px rgba(0, 0, 0, 0.05); */
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeActive = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;

  header {
    color: ${(props) => props.theme.colors.purple};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  main p {
    line-height: 1.5;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  p img {
    margin-bottom: 1rem;
  }

 `;

export const ChallengeFailedButton = styled(Button)`
  background: ${(props) => props.theme.colors.red};
  box-shadow: 0px 4px ${(props) => props.theme.colors.redShadow};

  &:hover {
    background: ${(props) => props.theme.colors.redDark};
  }
`;

export const ChallengeSucceededButton = styled(Button)`
  background: ${(props) => props.theme.colors.green};
  box-shadow: 0px 4px ${(props) => props.theme.colors.greenShadow};

  &:hover {
    background: ${(props) => props.theme.colors.greenDark};
  }
`;
