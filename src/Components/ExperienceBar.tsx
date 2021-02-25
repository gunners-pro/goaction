import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ContainerExperienceBar } from '../styles/components/experienceBar';

export function ExperienceBar(): JSX.Element {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ContainerExperienceBar percentToNextLevel={percentToNextLevel}>
      <span>0 xp</span>
      <div>
        <div />
        <span>
          {currentExperience}
          {' '}
          xp
        </span>
      </div>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
    </ContainerExperienceBar>
  );
}

export default ExperienceBar;
