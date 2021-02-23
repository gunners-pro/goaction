import ExperienceBar from '../Components/ExperienceBar';
import Profile from '../Components/Profile';

import {
  Container, MainContent, LeftContent,
} from '../styles/pages/index';

export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <MainContent>
        <LeftContent>
          <Profile />
        </LeftContent>

        <div>algo</div>
      </MainContent>

    </Container>
  );
}
