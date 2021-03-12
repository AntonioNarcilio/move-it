/* eslint-disable react/destructuring-assignment */
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import { SideBar } from '../components/SideBar';
import { ContentHomeContainer } from '../styles/pages/Home/styles';
import { ChallengeProvider } from '../contexts/ChallengeContext';
import { MyFooter } from '../components/MyFooter';
import { Corner } from '../components/Corner';
import { GlobalContainer } from '../styles/global';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  // console.log(props);
  return (

    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >

      {/* <SideBar /> */}

      <GlobalContainer>

        <ContentHomeContainer>

          <Head>
            <title>Inicio | Move.it</title>
          </Head>

          <ExperienceBar />
          <Corner />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>

          <MyFooter />

        </ContentHomeContainer>

      </GlobalContainer>

    </ChallengeProvider>

  );
}

// 🍪 Recuperando dados do Cookies
// Obrigatóriamente a func deve se chamar getServerSideProps e deve ser async
// Função só funciona nas paginas do next.js / funcionalidade do Next.js
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Pegando dados do cookies
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      // As infos no cookies vem no formato string
      // Precisamos no formato numero
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
