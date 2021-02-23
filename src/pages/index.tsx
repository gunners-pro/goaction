import Head from 'next/head';

import CompletedChallenges from '../Components/CompletedChallenges';
import Countdown from '../Components/Countdown';
import ExperienceBar from '../Components/ExperienceBar';
import Profile from '../Components/Profile';

import {
  Container, MainContent, LeftContent,
} from '../styles/pages/index';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | GoAction</title>
      </Head>
      <ExperienceBar />

      <MainContent>
        <LeftContent>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftContent>

        <div>algo</div>
      </MainContent>

    </Container>
  );
}
