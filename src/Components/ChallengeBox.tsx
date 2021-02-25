import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container, ChallengeNotActive, ChallengeActive } from '../styles/components/challengeBox';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>
            Ganhe
            {' '}
            {activeChallenge.amount}
            {' '}
            XP
          </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button onClick={resetChallenge} type="button">Falhei</button>
            <button type="button">Completei</button>
          </footer>
        </ChallengeActive>
      )
        : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
              Avance de level completando desafios.
            </p>
          </ChallengeNotActive>
        )}
    </Container>
  );
}
