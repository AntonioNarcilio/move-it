import { Corner } from '../components/Corner';
import { MyFooter } from '../components/MyFooter';
import { SideBar } from '../components/SideBar';
import { GlobalContainer } from '../styles/global';

import { ContentRankContainer } from '../styles/pages/Rank/styles';

export default function Rank() {
  return (
    <>
      <SideBar />

      <GlobalContainer>

        <ContentRankContainer>

          <Corner />

          <h1>Em Breve ...</h1>

          <MyFooter />

        </ContentRankContainer>

      </GlobalContainer>
    </>
  );
}
