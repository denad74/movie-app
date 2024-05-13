import React, { createContext, useState } from 'react';
import { defaultTabProps } from '../../constants/states';
import { TabContextProps, TabContextProviderProps } from './interfaces';

const TabContext = createContext<TabContextProps>(defaultTabProps);
const Provider = TabContext.Provider;

const TabContextProvider = ({ children }: TabContextProviderProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultTabProps.selectedTab);

  return <Provider value={{ selectedTab, setSelectedTab }}>{children}</Provider>;
};

export { TabContext, TabContextProvider };
