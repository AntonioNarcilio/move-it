import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return (
    <div className={styles.containerChallengeBox}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
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
            <button
              type="button"
              className={styles.challengeFailedButton}
              // onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
