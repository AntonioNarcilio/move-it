/* eslint-disable import/no-unresolved */
import { useContext } from 'react';
import Lottie from 'react-lottie';

import loadingAnimation from '../animation/congratulations.json';

import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.animation}>
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: loadingAnimation,
          }}
          height={850}
          width={850}
        />
      </div>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns !</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div>
  );
}
