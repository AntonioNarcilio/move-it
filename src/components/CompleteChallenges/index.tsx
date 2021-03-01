import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';

import { CompleteChallengeContainer } from './styles';

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <CompleteChallengeContainer>
      <span>Desafios completos</span>
      { challengesCompleted < 10 ? (
        <span>
          0
          {challengesCompleted}
        </span>
      ) : (
        <span>{challengesCompleted}</span>
      ) }

    </CompleteChallengeContainer>
  );
}
