import styled from 'styled-components';

export const ContainerMyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 4rem;

  footer a {
    color: ${(props) => props.theme.colors.footer};
  }

  @media (max-width: 825px) {
    footer {
      margin-top: 2.5rem;
      font-size: 0.9rem;
    }
  }

  @media (max-height: 412px) {
    footer {
      padding-top: 4rem;
      padding-bottom: 3rem;
    }
  }
`;
