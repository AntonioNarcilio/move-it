import styled from 'styled-components';

export const ContentHomeContainer = styled.div`
  min-height: 109vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-width: 825px) {
    height: auto;

    section {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 6.25rem;
      gap: 2rem;
      margin-top: 4rem;
      align-content: center;
    }
  }

  @media(max-height: 412px) {
    section {
      padding-top: 3.5rem;
    }
  }
`;
