/* eslint-disable import/no-unresolved */
import { useContext } from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import loadingAnimation from '../../animation/confetti-theme-dracula.json';

import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Overlay, Animation, Container } from './styles';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <Overlay>
      <Animation>
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: loadingAnimation,
          }}
          width={800}
          // height={800}
        />
      </Animation>
      <Container
        as={motion.div}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        <header>{level}</header>

        <strong>Parabéns !</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
}
