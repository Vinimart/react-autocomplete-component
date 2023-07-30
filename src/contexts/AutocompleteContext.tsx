import { createContext, useContext, useMemo, useState } from 'react';

export interface AutocompleteContextProps {
  inputValue: string;
  suggestions: string[];
  setInputValue: (inputValue: string) => void;
  setSuggestions: (suggestions: string[]) => void;
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
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const value = useMemo(
    () => ({ inputValue, setInputValue, suggestions, setSuggestions }),
    [inputValue, setInputValue, suggestions, setSuggestions]
  );

  return (
    <AutocompleteContext.Provider value={value}>
      {children}
    </AutocompleteContext.Provider>
  );
};

export const useAutocompleteContext = () => useContext(AutocompleteContext);
