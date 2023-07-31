import { createContext, useContext, useMemo, useState } from "react";

import type { MoviesAPIResponse } from "../services/moviesApi";

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
}: {
  children: React.ReactNode;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<MoviesAPIResponse["Search"]>(
    [],
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
