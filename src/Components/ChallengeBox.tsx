import { Container, ChallengeNotActive, ChallengeActive } from '../styles/components/challengeBox';

export default function ChallengeBox() {
  const hasActive = true;

  return (
    <Container>
      {hasActive ? (
        <ChallengeActive>
          <header>Ganhe 400 XP</header>

          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <button type="button">Falhei</button>
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
