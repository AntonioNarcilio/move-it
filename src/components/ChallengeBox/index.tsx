import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import {
  ContainerChallengeBox,
  ChallengeActive,
  ChallengeFailedButton,
  ChallengeSucceededButton,
  ChallengeNotActive,
} from './styles';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
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
    <ContainerChallengeBox>
      { activeChallenge ? (
        <ChallengeActive>
          <header>
            Ganhe
            {' '}
            {activeChallenge.amount}
            {' '}
            xp
          </header>

          <main>
            {/* ? → IF */}
            { activeChallenge.type === 'body' ? (
              <img src="icons/body.svg" alt="" />
            ) : [ // ELSE IF
              (activeChallenge.type === 'eye' ? (
                <img src="icons/eye.svg" alt="" />
              ) : ( // ELSE
                <img src="icons/body.svg" alt="" />
              )),
            ]}
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeFailedButton>
            <ChallengeSucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeSucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </ContainerChallengeBox>
  );
}
