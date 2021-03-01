import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
// import styles from '../../styles/components/ExperienceBar.module.css';

import {
  XpBar,
  CurrentXp,
  XpBarPercent,
} from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <XpBar>
      <span>0 xp</span>
      <div>
        <XpBarPercent widthBar={percentToNextLevel} />

        { percentToNextLevel === 0 ? (
          <CurrentXp
            Left={percentToNextLevel + 1.6}
          >
            {currentExperience}
            {' '}
            xp
          </CurrentXp>
        ) : (
          <CurrentXp
            Left={percentToNextLevel}
          >
            {currentExperience}
            {' '}
            xp
          </CurrentXp>
        )}

      </div>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
    </XpBar>
  );
}
