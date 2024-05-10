import React, { createContext, useState } from 'react';
import { TabContextProps, TabContextProviderProps } from './interfaces';
import { defaultTabProps } from '../../constants/defaults/states';

const TabContext = createContext<TabContextProps>(defaultTabProps);

const TabContextProvider = ({ children }: TabContextProviderProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultTabProps.selectedTab);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>{children}</TabContext.Provider>
  );
};

export { TabContext, TabContextProvider };
