import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  /* > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  } */

  > svg {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;
  }

  div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textTitle};
  }

  div p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  div p svg {
    margin-right: 0.5rem;
  }

  div p svg path {
    fill: ${(props) => props.theme.colors.iconLevel};
  }

`;
