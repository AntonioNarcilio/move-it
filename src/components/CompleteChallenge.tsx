import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completeChallengeContainer}>
      <span>Desafios completos</span>
      { challengesCompleted < 10 ? (
        <span>
          0
          {challengesCompleted}
        </span>
      ) : (
        <span>{challengesCompleted}</span>
      ) }

    </div>
  );
}
