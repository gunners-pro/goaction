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

const Home = () => {
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
      <GlobalStyle />

      <Container>
        <Head>
          <title>Início | GoAction</title>
        </Head>
        <ThemePallete toggleTheme={toggleTheme} />
        <ExperienceBar />

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

      </Container>
    </ThemeProvider>
  );
};

export default Home;
