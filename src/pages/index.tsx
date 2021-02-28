import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import pink from '../styles/themes/pink';
import darkgrey from '../styles/themes/darkgrey';

import CompletedChallenges from '../Components/CompletedChallenges';
import Countdown from '../Components/Countdown';
import ExperienceBar from '../Components/ExperienceBar';
import ThemePallete from '../Components/ThemePallete';
import Profile from '../Components/Profile';

import {
  Container, MainContent, LeftContent,
} from '../styles/pages/index';
import ChallengeBox from '../Components/ChallengeBox';
import CountdownProvider from '../contexts/CountdownContext';
import ChallengesProvider from '../contexts/ChallengesContext';

interface IndexProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ level, currentExperience, challengesCompleted }: IndexProps) {
  const [theme, setTheme] = useState(light);

  function saveThemeLocalStorage(name: string) {
    localStorage.setItem('@GoAction:theme', name);
  }

  function toggleTheme(title: string) {
    saveThemeLocalStorage(title);

    if (title === 'light') {
      setTheme(light);
    } else if (title === 'dark') {
      setTheme(dark);
    } else if (title === 'pink') {
      setTheme(pink);
    } else if (title === 'darkgrey') {
      setTheme(darkgrey);
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('@GoAction:theme');

    if (localTheme === 'light') {
      setTheme(light);
    } else if (localTheme === 'dark') {
      setTheme(dark);
    } else if (localTheme === 'pink') {
      setTheme(pink);
    } else if (localTheme === 'darkgrey') {
      setTheme(darkgrey);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <GlobalStyle />

        <Container>
          <Head>
            <title>Início | GoAction</title>
          </Head>
          <ThemePallete toggleTheme={toggleTheme} />
          <ExperienceBar />

          <CountdownProvider>
            <MainContent>
              <LeftContent>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </LeftContent>

              <div>
                <ChallengeBox />
              </div>
            </MainContent>
          </CountdownProvider>

        </Container>
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
