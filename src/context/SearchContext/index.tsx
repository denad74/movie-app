import React, { createContext, useState, useEffect } from 'react';
import { SearchContextProviderProps, SearchContextType } from './interfaces';

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: SearchContextProviderProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;
    if (searchTerm.length >= 3) {
      setLoading(true);
      debounceTimer = setTimeout(() => {
        setSearchQuery(searchTerm);
      }, 1000);
    } else {
      setSearchQuery('');
    }
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchQuery, loading }}>
      {children}
    </SearchContext.Provider>
  );
};
