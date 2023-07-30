import { createContext, useContext, useMemo, useState } from 'react';

import type { MoviesAPIResponse } from "../services/moviesApi";

export interface AutocompleteContextProps {
  isLoading: boolean;
  inputValue: string;
  suggestions: MoviesAPIResponse["Search"];
  setIsLoading: (isLoading: boolean) => void;
  setInputValue: (inputValue: string) => void;
  setSuggestions: (suggestions: MoviesAPIResponse["Search"]) => void;
}

const AutocompleteContext = createContext<AutocompleteContextProps>({
  isLoading: false,
  inputValue: "",
  suggestions: [],
  setIsLoading: () => {},
  setInputValue: () => {},
  setSuggestions: () => {},
});

export const AutocompleteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<MoviesAPIResponse["Search"]>(
    []
  );

  const value = useMemo(
    () => ({
      inputValue,
      isLoading,
      setInputValue,
      setIsLoading,
      setSuggestions,
      suggestions,
    }),
    [
      inputValue,
      isLoading,
      setInputValue,
      setIsLoading,
      setSuggestions,
      suggestions,
    ]
  );

  return (
    <AutocompleteContext.Provider value={value}>
      {children}
    </AutocompleteContext.Provider>
  );
};

export const useAutocompleteContext = () => useContext(AutocompleteContext);
