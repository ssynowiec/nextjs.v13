import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type menuState = {
  isMenuVisible: boolean;
  toggleMenu: (isMenuOpen: boolean) => void;
};

type HeaderProviderProps = { children: ReactNode };

const MenuContext = createContext<menuState | undefined>(undefined);

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <MenuContext.Provider value={{ isMenuVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useHeaderContext = () => {
  const ctx = useContext(MenuContext);
  if (ctx === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return ctx;
};
