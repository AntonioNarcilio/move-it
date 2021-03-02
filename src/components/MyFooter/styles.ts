import styled from 'styled-components';

export const ContainerMyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  footer a {
    color: ${(props) => props.theme.colors.green};
  }

@media (max-width: 600px) {
  footer {
    margin-top: 2.5rem;
    font-size: 0.9rem;
  }
}
`;
