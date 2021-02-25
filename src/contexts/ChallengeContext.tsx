import { createContext, useState, ReactNode } from 'react';

export const ChallengeContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengeProvider({ children }: ChallengesProviderProps) {
  // Estado para armazenar o level
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }
  return (
    <ChallengeContext.Provider value={{ level, levelUp }}>
      {children}
    </ChallengeContext.Provider>
  );
}
