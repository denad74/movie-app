interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

export interface SearchContextProviderProps {
  children: ReactNode;
}
