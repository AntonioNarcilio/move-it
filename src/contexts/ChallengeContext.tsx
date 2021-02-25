import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  // Os 3 campos que contem o json com os desafios
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesComplete: number;
  activeChallenge: Challenge;
  levelUp: () => void; // função que não tem retorna
  startNowChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengesProviderProps {
  // Quando o children tbm é um componente react pode-se utilizar o ReactNode
  // ReactNode = Aceita qualquer elemento children como filho
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children }: ChallengesProviderProps) {
  // Estado para armazenar o level
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesComplete, setChallengesComplete] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  // Calculo geralmente utilizado nos game de rpg's
  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNowChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesComplete,
        activeChallenge,
        levelUp,
        startNowChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
