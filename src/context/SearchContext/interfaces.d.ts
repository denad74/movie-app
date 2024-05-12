export interface SearchQuery {
  query: string;
}

export interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchQuery?: string;
  loading: boolean;
}

export interface SearchContextProviderProps {
  children: ReactNode;
}
