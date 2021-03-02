/* eslint-disable no-new */
import {
  createContext, useState, ReactNode, useEffect,
} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

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
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  // Quando o children tbm é um componente react pode-se utilizar o ReactNode
  // ReactNode = Aceita qualquer elemento children como filho
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  // Estado para armazenar o level
  const [level, setLevel] = useState(rest.level ?? 1);// ?? → se nao existir
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  // Calculo geralmente utilizado nos game de RPG'S
  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  // Pedindo permissão para notificações no browser
  // Utilizando api do browser
  useEffect(() => {
    Notification.requestPermission();

    // if (Notification.permission === 'denied' || Notification.permission === 'default') {
    //   Notification.requestPermission().then((result) => {
    //     console.log(result);
    //   });
    //   alert('Precisamos da permissão para notificações');
    // }
  }, []);

  // 🍪 Trabalhando com cookies
  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];
    setActiveChallenge(challenge);

    // Tocando audio
    new Audio('/notification.mp3').play();
    const img = '/icon.png';

    // Verificando se usuário deu permissão para notificações
    if (Notification.permission === 'granted') {
      const notification = new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
        icon: `${img}`,
      });

      notification.onclick = ((event) => {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.focus();
        notification.close();
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
        closeLevelUpModal,
      }}
    >
      {children}
      { isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
}
