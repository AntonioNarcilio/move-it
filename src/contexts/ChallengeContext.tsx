/* eslint-disable no-new */
import {
  createContext, useState, ReactNode, useEffect,
} from 'react';
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
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void; // função que não tem retorna
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
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
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  // Calculo geralmente utilizado nos game de RPG'S
  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  // Pedindo permissão para notificações no browser
  // Utilizando api do browser
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];
    setActiveChallenge(challenge);

    // Tocando audio
    new Audio('/notification.mp3').play();

    // Verificando se usuário deu permissão para notificações
    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    // Pegando xp do usuário e add xp referente a quanto desafio dá
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
