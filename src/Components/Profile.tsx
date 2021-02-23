import { ProfileContent } from '../styles/components/profile';

export default function Profile() {
  return (
    <ProfileContent>
      <img src="https://github.com/gunners-pro.png" alt="Imagem Perfil" />
      <div>
        <strong>Fabricyo Barreto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 2
        </p>
      </div>
    </ProfileContent>
  );
}
