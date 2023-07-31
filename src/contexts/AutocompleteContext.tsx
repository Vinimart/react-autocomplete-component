import { createContext, useContext, useMemo, useState } from "react";

import type { MoviesAPIResponse } from "../services/moviesApi";

export interface AutocompleteContextDefProps {
  children: React.ReactNode;
  defInputValue?: string;
  defSuggestions?: MoviesAPIResponse["Search"];
}

export interface AutocompleteContextProps {
  inputValue: string;
  suggestions: MoviesAPIResponse["Search"];
  setInputValue: (inputValue: string) => void;
  setSuggestions: (suggestions: MoviesAPIResponse["Search"]) => void;
}

const AutocompleteContext = createContext<AutocompleteContextProps>({
  inputValue: "",
  suggestions: [],
  setInputValue: () => {},
  setSuggestions: () => {},
});

export const AutocompleteProvider = ({
  children,
  defSuggestions,
  defInputValue,
}: AutocompleteContextDefProps) => {
  const [inputValue, setInputValue] = useState(defInputValue ?? "");
  const [suggestions, setSuggestions] = useState<MoviesAPIResponse["Search"]>(
    defSuggestions ?? [],
  );

  const value = useMemo(
    () => ({
      inputValue,
      setInputValue,
      setSuggestions,
      suggestions,
    }),
    [inputValue, setInputValue, setSuggestions, suggestions],
  );

  return (
    <AutocompleteContext.Provider value={value}>
      {children}
    </AutocompleteContext.Provider>
  );
};

export const useAutocompleteContext = () => useContext(AutocompleteContext);
