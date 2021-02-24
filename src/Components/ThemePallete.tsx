import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, CircleButton } from '../styles/components/themePalette';

interface ThemePalleteProps {
  toggleTheme(title: string): void;
}

const ThemePallete: React.FC<ThemePalleteProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <p>Escolha seu tema favorito: </p>
      <section>
        <CircleButton
          onClick={() => {
            if (title === 'light') {
              //
            } else {
              toggleTheme('light');
            }
          }}
          selected={title === 'light'}
          style={{ background: 'linear-gradient( 90deg, #f2f3f5 50%, #4cd62b 50%)' }}
        />
        <CircleButton
          onClick={() => {
            if (title === 'dark') {
              //
            } else {
              toggleTheme('dark');
            }
          }}
          selected={title === 'dark'}
          style={{ background: 'linear-gradient( 90deg, #141414 50%, #E13700 50%)' }}
        />

        <CircleButton
          onClick={() => {
            if (title === 'pink') {
              //
            } else {
              toggleTheme('pink');
            }
          }}
          selected={title === 'pink'}
          style={{ background: 'linear-gradient( 90deg, #FFE5D9 50%, #F4ACB7 50%)' }}
        />

        <CircleButton
          onClick={() => {
            if (title === 'darkgrey') {
              //
            } else {
              toggleTheme('darkgrey');
            }
          }}
          selected={title === 'darkgrey'}
          style={{ background: 'linear-gradient( 90deg, #353c44 50%, #5a5dac 50%)' }}
        />
      </section>
    </Container>
  );
};

export default ThemePallete;
