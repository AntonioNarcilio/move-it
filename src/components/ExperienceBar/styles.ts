import styled from 'styled-components';

interface XpBarPercentProps {
  widthBar: number;
}

interface CurrentXpProps{
  Left: number;
}

export const XpBar = styled.header`
  display: flex;
  align-items: center;

  /* padding-bottom: 2rem; */

  span {
    font-size: 1rem;
  }
    > div {
      flex: 1; /* ocupa a largura max */
      height: 4px;
      border-radius: 4px;
      background: ${(props) => props.theme.colors.grayLine};
      margin: 0 1.5rem;
      position: relative;
    }
`;

export const XpBarPercent = styled.div<XpBarPercentProps>`
    width: ${(props) => props.widthBar}%;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.green};
`;

export const CurrentXp = styled.span<CurrentXpProps>`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);

  left: ${(props) => props.Left}%;
`;
