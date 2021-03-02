import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 600;

  outline: 0;

  background: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 4px ${(props) => props.theme.colors.greenShadow};

  transition: all 0.4s ease;

  /* &:hover {
    background: ${(props) => props.theme.colors.greenDark};
  } */

  &:active {
    box-shadow: 0 0;
    transform: translateY(4px);
  }
`;

export default Button;
