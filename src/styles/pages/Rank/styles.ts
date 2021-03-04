import styled from 'styled-components';

export const RankContainer = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  display: grid;
  grid-template-columns: 5.2rem auto;


  @media (max-width: 759px) {
    display: grid;
    grid-template-columns: 1fr;
  }

`;

export const ContentRankContainer = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;


  align-items: center;
  justify-content: center;

`;
