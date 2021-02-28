import styled from 'styled-components';

export const ContainerChallengeBox = styled.div`
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

export const Button = styled.button`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${(props) => props.theme.colors.background};
  outline: 0;

  font-size: 1rem;
  font-weight: 600;

  transition: all 0.2s ease;
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
  box-shadow: 0px 4px ${(props) => props.theme.colors.greenDark};

  &:hover {
    background: ${(props) => props.theme.colors.greenDark};
  }
`;

// export default ContainerChallengeBox;
