import ChallengesProvider from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
