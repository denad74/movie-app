import React, { createContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContextProviderProps, SearchContextType } from './interfaces';

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: SearchContextProviderProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  //   const [searchResults, setSearchResults] = useState<any[]>([]); // You can replace `any[]` with the actual type of search results
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    if (searchTerm.length >= 3) {
      setLoading(true);
      debounceTimer = setTimeout(() => {
        setSearchParams({ query: searchTerm });
      }, 1000);
    } else {
      setSearchParams({ query: '' });
    }

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  // const fetchSearchResults = async (term: string) => {
  //   try {
  //     const response = await fetch(`TMDB_SEARCH_ENDPOINT?query=${term}`);
  //     const data = await response.json();
  //     setSearchResults(data.results);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //     setLoading(false);
  //   }
  // };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, loading }}>
      {children}
    </SearchContext.Provider>
  );
};
