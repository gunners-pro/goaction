import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContent } from '../styles/components/profile';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContent>
      <img src="https://github.com/gunners-pro.png" alt="Imagem Perfil" />
      <div>
        <strong>Fabricyo Barreto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
          {' '}
          {level}
        </p>
      </div>
    </ProfileContent>
  );
}
