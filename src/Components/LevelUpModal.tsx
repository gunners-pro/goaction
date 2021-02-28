import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Overlay, Container } from '../styles/components/levelUpModal';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Voce alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  );
}
