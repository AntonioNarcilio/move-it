import { Corner } from '../components/Corner';
import { MyFooter } from '../components/MyFooter';
import { SideBar } from '../components/SideBar';

import { RankContainer, ContentRankContainer } from '../styles/pages/Rank/styles';

export default function Rank() {
  return (
    <RankContainer>

      <SideBar />

      <ContentRankContainer>

        <Corner />

        <h1>Em Breve ...</h1>

        <MyFooter />

      </ContentRankContainer>

    </RankContainer>
  );
}
