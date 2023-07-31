import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { AutocompleteProvider } from '../../../../contexts/AutocompleteContext';
import Autocomplete from '../Autocomplete';

describe("Autocomplete", () => {
  it("should render the autocomplete component", () => {
    render(
      <AutocompleteProvider
        defInputValue="Shawshank"
        defSuggestions={[
          {
            imdbID: "123456",
            Title: "The Shawshank Redemption",
            Type: "Drama",
            Year: "1994",
            Poster: "",
          },
        ]}
      >
        <Autocomplete />
      </AutocompleteProvider>
    );

    expect(screen.getByTestId("autocomplete")).toBeInTheDocument();
    expect(screen.getByTestId("card-movie")).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    expect(screen.queryByTestId("empty")).not.toBeInTheDocument();
  });

  it("should not render cards when suggestions is empty", () => {
    render(
      <AutocompleteProvider defInputValue="Shawshank" defSuggestions={[]}>
        <Autocomplete />
      </AutocompleteProvider>
    );

    expect(screen.getByTestId("autocomplete")).toBeInTheDocument();
    expect(screen.queryByTestId("card-movie")).not.toBeInTheDocument();
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    expect(screen.getByTestId("empty")).toBeInTheDocument();
  });
});
