import React, { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';

type SearchContextData = {
  loadCharacter: () => Promise<void>;
  character: Character[];
}
type SearchContextProps = {
  children: ReactNode;
}

type Character = {
  id: string;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);


export function SearchProvider({ children }: SearchContextProps) {
  const [character, setCharacter] = useState<Character[]>([]);


  async function loadCharacter() {
    try {

      const response = await api.get(`character/?name=Rick`);
      setCharacter(response.data.results);

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <SearchContext.Provider value={{
      loadCharacter,
      character
    }}>
      {children}
    </SearchContext.Provider>
  )
}

