import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, CircleButton } from '../styles/components/themePalette';

interface ThemePalleteProps {
  toggleTheme(): void;
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
              toggleTheme();
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
              toggleTheme();
            }
          }}
          selected={title === 'dark'}
          style={{ background: 'linear-gradient( 90deg, #141414 50%, #5965e0 50%)' }}
        />
      </section>
    </Container>
  );
};

export default ThemePallete;
