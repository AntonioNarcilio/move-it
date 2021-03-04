/* eslint-disable no-use-before-define */
import {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';

interface SelectPageButtonContextData{
  isSelectedHome: boolean;
  isSelectedRank: boolean;
  selectHomePage: () => void;
  selectRankPage: () => void;
}

interface SelectPageProviderProps {
  children: ReactNode;
}

export const SelectPageButtonContext = createContext({} as SelectPageButtonContextData);

export function SelectPageProvider({ children }: SelectPageProviderProps) {
  const [isSelectedHome, setIsSelectedHome] = useState(true);
  const [isSelectedRank, setIsSelectedRank] = useState(false);

  const router = useRouter();

  // Função a ser chamada dependendo da rota escolhida
  useEffect(() => {
    if (router.pathname === '/') {
      selectHomePage();
    } else
    if (router.pathname === '/rank') {
      selectRankPage();
    }
  }, []);

  // Função a ser chamada quando usuário clicar no botão do sidebar
  function selectHomePage() {
    setIsSelectedHome(true);
    setIsSelectedRank(false);
  }
  // Função a ser chamada quando usuário clicar no botão do sidebar
  function selectRankPage() {
    setIsSelectedRank(true);
    setIsSelectedHome(false);
  }

  return (
    <SelectPageButtonContext.Provider
      value={{
        isSelectedHome,
        isSelectedRank,
        selectHomePage,
        selectRankPage,
      }}
    >
      {children}
    </SelectPageButtonContext.Provider>
  );
}
