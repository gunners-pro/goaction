import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { Container, ChallengeNotActive, ChallengeActive } from '../styles/components/challengeBox';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

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
            <button onClick={handleChallengeFailed} type="button">Falhei</button>
            <button onClick={handleChallengeSucceeded} type="button">Completei</button>
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
