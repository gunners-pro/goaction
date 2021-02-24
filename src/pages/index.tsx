import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

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

export default function Home() {
  const [theme, setTheme] = useState(light);

  function toggleTheme(title: string) {
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

          <div>algo</div>
        </MainContent>

      </Container>
    </ThemeProvider>
  );
}
