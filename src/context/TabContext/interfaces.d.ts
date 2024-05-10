import { ReactNode } from 'react';

export interface TabContextProps {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export interface TabContextProviderProps {
  children: ReactNode;
}
