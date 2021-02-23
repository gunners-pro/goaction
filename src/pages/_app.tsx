import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
