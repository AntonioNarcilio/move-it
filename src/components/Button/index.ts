import styled from 'styled-components';

const Button = styled.button`
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

  &:active {
    box-shadow: 0 0;
    transform: translateY(4px);
  }
`;

export default Button;
